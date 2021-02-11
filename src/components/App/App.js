import Comics from '../Comics';

import './App.sass'

class App {
  async render() {
     await Comics.render();
  }
}

export default new App();