import { TriviaQuestion } from "./models/TriviaQuestion.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  triviaQuestions = []

  activeQuestion = {}

}

export const AppState = createObservableProxy(new ObservableAppState())