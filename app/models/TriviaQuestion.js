export class TriviaQuestion {

  constructor(data) {
    this.type = data.type
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
    this.difficulty = data.difficulty
    this.category = data.category
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

  get activeAnswers() {
    return `
    <div class="col-4 border border-4 bg-light">
      <h3>${this.correctAnswer}</h3>
    </div>
    <div class="col-4 border border-4 bg-dark text-light">
      <h3>${this.incorrectAnswer}</h3>
    </div>
    <div class="col-4 border border-4 bg-dark text-light">
      <h3>${this.incorrectAnswer}</h3>
    </div>
    <div class="col-4 border border-4 bg-light">
      <h3>${this.incorrectAnswer}</h3>
    </div>
  </section>
  `
  }

  get activeIncorrectAnswers() {
    let activeIncorrectAnswers = ''
    this.incorrectAnswer.forEach(incAnswer => activeIncorrectAnswers += `
    <div class="col-4 border border-4 bg-dark text-light selectable" role="button"
    onclick="app.TriviaController.incorrectAnswerSelected()">
    <h3>${incAnswer}</h3>
  </div>
  `)
    return activeIncorrectAnswers
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