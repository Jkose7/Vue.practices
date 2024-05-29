import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counter: 1,
    };
  },
  getters: {
    counterDouble: (state) => state.counter * 2,
  },
  actions: {
    increment(value = 1) {
      this.counter += value;
    },
  },
});
