import { AppState } from "../AppState.js";
import { TriviaQuestion } from "../models/TriviaQuestion.js";

class TriviasService {


  async getTrivia() {
    console.log('service got trivia');

    const response = await fetch('https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple')

    const triviaPojos = await response.json()

    console.log('trivia pojos ', triviaPojos);

    const triviaQuestions = triviaPojos.results.map(pojo => new TriviaQuestion(pojo))
    AppState.triviaQuestions = triviaQuestions

    console.log(AppState.triviaQuestions);
  }






  connectionTest(test) {
    console.log('service connection test: ', test);

  }

}




export const triviasService = new TriviasService()