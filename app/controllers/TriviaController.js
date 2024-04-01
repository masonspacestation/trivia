import { AppState } from "../AppState.js";
import { TriviaQuestion } from "../models/TriviaQuestion.js";
import { triviasService } from "../services/TriviaService.js";
import { setHTML } from "../utils/Writer.js";


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
    answers.forEach(answer => answersDisplay += answer.activeIncorrectAnswers)
    setHTML('answers-display', answersDisplay)

  }


  incorrectAnswerSelected() {
    console.log('sorry, not correct');
  }


  correctAnswerSelected() {

  }
  revealCorrectAnswer() {

  }

  // connectionTest() {
  //   triviasService.connectionTest('passed')
  // }







}