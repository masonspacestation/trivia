export class TriviaQuestion {

  constructor(data) {
    this.type = data.type
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.difficulty = data.difficulty
    this.category = data.category
    this.options = [this.correctAnswer, this.incorrectAnswer[0], this.incorrectAnswer[1], this.incorrectAnswer[2]]
  }


  get activeAnswers() {
    let activeAnswers = ''
    this.options.forEach(answer => activeAnswers += `
    <div class="col-4 rounded rounded-3 p-3 bg-dark text-light selectable" role="button"
    onclick="${answer == this.correctAnswer ?
        'app.TriviaController.correctAnswerSelected()' : 'app.TriviaController.answerSelected()'}">
    <h3>${answer}</h3>
    </div>
    `
    )


    return activeAnswers
  }


  get revealAnswer() {
    let revealAnswer = ''
    this.options.forEach(answer => revealAnswer += `
    <div class="col-4 rounded rounded-3 p-3 bg-${answer == this.correctAnswer ?
        'success' : 'secondary'} text-light selectable" role="button"
   onclick="app.TriviaController.answerSelected('${answer}')">
    <h3>${answer}</h3>
    </div>
    `
    )

    return revealAnswer
  }

  get activeQuestion() {
    return `
    <div class="card col-6 mb-5">
      <h4>${this.question}</h4>
      <div class="d-flex justify-content-around">
        <span class="w-auto text-start">Difficulty: ${this.difficulty}</span><span class="w-auto text-end">Category: ${this.category}</span>
      </div>
    </div>
  </section>
`
  }



}


/**!SECTION
{
  "type": "multiple",
  "difficulty": "medium",
  "category": "Art",
  "question": "Which artist&rsquo;s studio was known as &#039;The Factory&#039;?",
  "correct_answer": "Andy Warhol",
  "incorrect_answers": [
    "Roy Lichtenstein",
    "David Hockney",
    "Peter Blake"
  ]
}
*/