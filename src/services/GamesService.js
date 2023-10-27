import { HTTPClient } from '../utils/requests';

const sort = [
  { id: 2, description: 'Price' },
  { id: 3, description: 'Price' },
  { id: 4, description: 'Title' }
];

export default {
  async getPagedGamesOffers(gameSearched, orderBy, getAll) {
    console.log(getAll);
    let url = `deals?storeID=1&onSale=1&AAA=1`;

    if (!getAll) {
      url += 'pageNumber=0&pageSize=12';
    }

    if (gameSearched) {
      url += `&title=${gameSearched}`;
    }

    if (orderBy) {
      const order = sort.find((order) => order.id == orderBy);
      if (order) {
        url += `&sortBy=${order.description}`;
      }
    }

    if (orderBy === 2) {
      url += '&desc=1';
    }

    return HTTPClient.get(url).then(({ status, data }) => {
      if (status == 200) {
        let gameWithDiscount = data.map((game) => {
          return {
            ...game,
            discount: (game.normalPrice - game.salePrice) / (game.normalPrice / 100)
          };
        });

        if (orderBy === 1) {
          gameWithDiscount = gameWithDiscount.sort((game1, game2) =>
            game1.discount < game2.discount ? 1 : 0
          );
        }

        return gameWithDiscount;
      }
    });
  }
};
