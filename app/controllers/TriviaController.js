import { AppState } from "../AppState.js";
import { TriviaQuestion } from "../models/TriviaQuestion.js";
import { triviasService } from "../services/TriviaService.js";
import { setHTML } from "../utils/Writer.js";
import { Pop } from "../utils/Pop.js";


export class TriviaController {

  constructor() {
    console.log('🎮');
    // this.connectionTest()
    this.getTrivia()
    this.drawQuestion
    AppState.on('triviaQuestions', this.drawQuestion)
    AppState.on('triviaQuestions', this.drawAnswers)
  }

  getTrivia() {
    triviasService.getTrivia()

  }

  drawQuestion() {
    // this will show the question, wait a few seconds, then drawAnswers()
    let questions = AppState.triviaQuestions
    let questionDisplay = ''
    questions.forEach(question => questionDisplay += question.activeQuestion)
    setHTML('question-display', questionDisplay)

  }


  drawAnswers() {
    let answers = AppState.triviaQuestions
    let answersDisplay = ''
    answers.forEach(answer => answersDisplay += answer.activeAnswers)
    setHTML('answers-display', answersDisplay)

  }


  async revealCorrectAnswer() {
    let answers = AppState.triviaQuestions
    let answersDisplay = ''
    await answers.forEach(answer => answersDisplay += answer.revealAnswer)
    setHTML('answers-display', answersDisplay)

    document.getElementById('next-button').classList.remove('d-none')

  }

  loadNextQuestion() {
    document.getElementById('next-button').classList.add('d-none')
    console.log('good');
    this.getTrivia()
    console.log('still good');


  }

  answerSelected(answer) {
    console.log('ye have answered. . . poorly');
    Pop.toast('Try Again!', 'error', 'center')

  }

  correctAnswerSelected(answer) {
    console.log('ye have answered');
    Pop.toast('You Win!', 'success', 'center')
    this.revealCorrectAnswer()

  }





}



// connectionTest() {
//   triviasService.connectionTest('passed')
// }







