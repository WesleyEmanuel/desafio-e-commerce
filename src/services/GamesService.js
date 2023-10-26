import { HTTPClient } from '../utils/requests';

export default {
  async getPagedGamesOffers() {
    const url = `deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1`;
    return HTTPClient.get(url).then(({ status, data }) => {
      if (status == 200) {
        return data;
      }
    });
  }
};
