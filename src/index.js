import 'regenerator-runtime/runtime';
import './main.sass';
import axios from 'axios';

const API_KEY = 'a5837db97d72016c81a7a776f4240db9'
const url = 'https://gateway.marvel.com/v1/public/comics';

class GetDataApi {
  async getData(url) {
    const response = await axios.get(url, {
      params: {
        apikey: API_KEY
      }
    });

    console.log(response.data.data.result);
  }
}

const getDataApi = new GetDataApi();

getDataApi.getData(url)