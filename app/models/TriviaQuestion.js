export class TriviaQuestion {

  constructor(data) {
    this.type = data.type
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answer
    this.difficulty = data.difficulty
    this.category = data.category
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