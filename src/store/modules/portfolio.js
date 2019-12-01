const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    const _quantity = +quantity;
    if (record) {
      record.quantity = +record.quantity + _quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: _quantity
      });
    }
    state.funds -= stockPrice * _quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    const _quantity = +quantity;
    if (record) {
      record.quantity = +record.quantity;
      if (record.quantity > _quantity) {
        record.quantity -= _quantity;
      }
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * _quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
