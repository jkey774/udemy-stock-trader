<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" active-class="active" tag="li"
            ><a>Portfolio</a></router-link
          >
          <router-link to="/stocks" activeClass="active" tag="li"
            ><a>Stocks</a></router-link
          >
        </ul>
        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | currency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      let url = "https://vuejs-stock-trader-c0b8f.firebaseio.com/.json";

      axios.put(url, data).then(
        response => {},
        err => {
          console.log(err);
        }
      );
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
