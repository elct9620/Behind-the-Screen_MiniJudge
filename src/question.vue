<template>
  <div id="question">
    <section>
      <h2>{{ question }}</h2>
      <p>{{ description }}</p>
      <div>
        <button v-for="answer in answers" v-bind:class="[buttonStyle, {'btn-active': currentAnswer == answer}]" @click="select(answer)">
          {{ answer.label }}
        </button>
      </div>
      <p class="text-center">
        <button class="btn btn-primary btn-hammer btn-large" @click="next">選擇</button>
      </p>
    </section>
  </div>
</template>

<script>
import questions from './questions.yml'

export default {
  data: function() {
    return {
      currentAnswer: null,
      questionID: 'init',
      currentQuestion: questions['init']
    }
  },
  computed: {
    question() {
      return this.currentQuestion.question;
    },
    description() {
      return this.currentQuestion.description;
    },
    answers() {
      return this.currentQuestion.answers;
    },
    buttonStyle() {
      console.log(this)
      return {
        'btn': true,
        'btn-primary': true,
        'btn-fullwidth': true
      }
    }
  },
  methods: {
    next() {
      if(this.currentAnswer === null) {
        return;
      }

      if(this.currentAnswer.hasOwnProperty('to')) {
        this.questionID = this.currentAnswer.to;
        this.currentAnswer = null;
        return;
      }

      this.$router.push('/result')
    },
    select(answer) {
      this.currentAnswer = answer;
    }
  },
  watch: {
    questionID(id) {
      this.currentQuestion = questions[id];
    }
  }
}
</script>
