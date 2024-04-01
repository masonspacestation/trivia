import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { TriviaController } from "./controllers/TriviaController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TriviaController],
    view: 'app/views/TriviaView.html'
  },
])