<template>
  <div id="question">
    <section>
      <h2>{{ currentQuestion.question }}</h2>
      <description :paragraphs="currentQuestion.description" />
      <transition-group name="answer" tag="div">
        <answer
          v-for="(answer, index) in currentQuestion.answers"
          :key="index"
          :text="answer.text"
          :class="{'btn-active': currentSelected === index}"
          @click.native="select(index)"
        />
      </transition-group>
      <p class="text-center">
        <button class="btn btn-primary btn-hammer btn-large" @click="next">選擇</button>
      </p>
    </section>
  </div>
</template>

<script>
import questions from './questions.yml';

import Description from './question/description.vue';
import Answer from './question/answer.vue';

import Bus from './store';

export default {
  data() {
    return {
      currentQuestionID: null,
      currentSelected: null,
      answeredIDs: [],
    };
  },
  components: {
    description: Description,
    answer: Answer,
  },
  created() {
    this.currentQuestionID = this.findNextQuestion();
  },
  mounted() {
    this.$nextTick(() => {
      document.documentElement.className = 'jf-loading';
      if (_jf) { _jf.flush(); }
    });
  },
  computed: {
    currentQuestion() {
      return questions[this.currentQuestionID];
    },
    currentAnswer() {
      return this.currentQuestion.answers[this.currentSelected];
    },
  },
  methods: {
    next() {
      if (!this.currentAnswer) {
        return;
      }

      this.answeredIDs.push(this.currentQuestionID);
      Bus.$emit('UpdateScore', this.currentAnswer);

      if (this.answeredIDs.length >= 4) {
        this.$router.push('/result');
      } else {
        this.currentQuestionID = this.findNextQuestion();
        this.currentSelected = null;

        this.$nextTick(() => {
          document.documentElement.className = 'jf-loading';
          if (_jf) { _jf.flush(); }
        });
      }
    },
    select(index) {
      this.currentSelected = index;
    },
    findNextQuestion() {
      const nextID = Math.floor(questions.length * Math.random());
      if (this.answeredIDs.indexOf(nextID) === -1) {
        return nextID;
      }
      return this.findNextQuestion();
    },
  },
  watch: {
  },
};
</script>
