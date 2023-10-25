import { HTTPClient } from '../utils/requests';

export default {
  getPagedStoreGames() {
    return HTTPClient.get('deals').then(({ status, data }) => {
      if (status == 200) {
        return data;
      }
    });
  }
};
