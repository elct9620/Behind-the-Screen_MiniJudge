<template>
  <div id="question">
    <section>
      <h2>{{ currentQuestion.question }}</h2>
      <div v-html="currentQuestion.description"></div>
      <transition-group name="answer" tag="div">
        <button
          v-for="(answer, index) in currentQuestion.answers"
          v-bind:key="index"
          class='btn btn-primary btn-fullwidth'
          v-bind:class="{'btn-active': currentSelected === index}"
          @click="select(index)">
          {{ answer }}
        </button>
      </transition-group>
      <p class="text-center">
        <button class="btn btn-primary btn-hammer btn-large" @click="next">選擇</button>
      </p>
    </section>
  </div>
</template>

<script>
import questions from './questions.yml';

export default {
  data() {
    return {
      currentSelected: null,
      questionSetID: null,
      questionIndex: 0,
      answers: [],
    };
  },
  created() {
    this.questionSetID =
      Math.floor(questions.length * Math.random());
  },
  computed: {
    currentQuestion() {
      return this.questionSet[this.questionIndex];
    },
    questionSet() {
      return questions[this.questionSetID];
    },
    buttonStyle() {
      return {
        btn: true,
        'btn-primary': true,
        'btn-fullwidth': true,
      };
    },
  },
  methods: {
    select(index) {
      this.currentSelected = index;
    },
    next() {
      if (this.currentSelected == null) {
        return;
      }

      this.answers.push(this.currentSelected + 1);
      this.currentSelected = null;
      this.questionIndex += 1;

      if (this.questionIndex >= this.questionSet.length) {
        // TODO: To result page
        this.$router.push(`/result/${this.questionSetID + 1}${this.answers.join('')}`);
      }
    },
  },
  watch: {
  },
};
</script>
