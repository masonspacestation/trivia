import { AppState } from "../AppState.js";
import { triviasService } from "../services/TriviaService.js";


export class TriviaController {

  constructor() {
    console.log('🎮');
    this.connectionTest()
    this.getTrivia()
  }

  getTrivia() {
    triviasService.getTrivia()

  }



  connectionTest() {
    triviasService.connectionTest('passed')
  }







}