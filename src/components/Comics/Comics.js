import {API_URL, URL_COMICS} from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

import './Comics.sass'


class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log(data);
  }
}

export default new Comics();