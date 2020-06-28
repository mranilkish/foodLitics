import {getApi} from '../utils/axios';

const subURL = '';

class MealsApi {
  constructor() {
    this.api = getApi();
  }

  setApi(api) {
    this.api = api;
  }

  async suggestedMeals() {
    try {
      var res = await this.api.get('');
      return res.data;
    } catch (e) {
      throw e.response.data;
    }
  }
}

var mealsApi = new MealsApi();
export default mealsApi;