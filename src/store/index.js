import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      todoList: [],
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
