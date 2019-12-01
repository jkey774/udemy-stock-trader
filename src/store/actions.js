import Vue from "vue";
import axios from "axios";

export const loadData = ({ commit }) => {
  let url = "https://vuejs-stock-trader-c0b8f.firebaseio.com/.json";
  axios.get(url).then(
    response => {
      if (response.data) {
        const stocks = response.data.stocks;
        const funds = response.data.funds;
        const stockPortfolio = response.data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    },
    err => {
      console.log(err);
    }
  );
};
