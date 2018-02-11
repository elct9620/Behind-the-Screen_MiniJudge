<template>
  <div id="question">
    <section>
      <h1>{{ question }}</h1>
      <p>{{ description }}</p>
      <div>
        <button v-for="answer in answers" class="btn btn-primary" @click="goto(answer)">
          {{ answer.label }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import questions from './questions.yml'

export default {
  data: function() {
    return {
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
    }
  },
  methods: {
    goto(answer) {
      if(answer.hasOwnProperty('to')) {
        this.questionID = answer.to;
        return;
      }
      // TODO: Show result page
    }
  },
  watch: {
    questionID(id) {
      this.currentQuestion = questions[id];
    }
  }
}
</script>
