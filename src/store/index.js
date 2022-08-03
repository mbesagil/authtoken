import { createStore } from "vuex";


export default createStore({
  state: {
    token: null,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state){
      state.token = null;
    }
  },

  getters: {
    _isAuthenticated: (state) => state.token != null,
  },
});
