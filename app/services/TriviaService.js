import { AppState } from "../AppState.js";
import { TriviaQuestion } from "../models/TriviaQuestion.js";

class TriviasService {


  async getTrivia() {
    console.log('service got trivia');
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=25&difficulty=medium')
    // console.log('🔮 ', response);

    const triviaPojos = await response.json()
    // console.log('trivia pojos ', triviaPojos);

    const triviaQuestions = triviaPojos.data.map(triviaPojo => new TriviaQuestion(triviaPojo))
    AppState.triviaQuestions = triviaQuestions

    console.log(AppState.triviaQuestions);
  }

  connectionTest(test) {
    console.log('service connection test: ', test);

  }

}




export const triviasService = new TriviasService()