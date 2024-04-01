class TriviasService {
  connectionTest(test) {
    console.log('service connection test: ', test);
  }

}




export const triviasService = new TriviasService()