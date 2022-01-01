import { createStore } from "vuex";

class User {
  name = "";
  id = 0;
}
class State {
  loginStatus = "";
  token: string = localStorage.getItem("token") || "";
  user: User = new User();
}

export default createStore({
  state: new State(),
  mutations: {
    auth_request(state) {
      state.loginStatus = "loading";
    },
    auth_success(state: State, payload: [string, User]) {
      const [token, user] = payload;
      state.loginStatus = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state: State, msg = "error") {
      state.loginStatus = msg;
      state.token = "";
      state.user = new User();
    },
    auth_quit(state: State) {
      state.loginStatus = "";
      state.token = "";
      state.user = new User();
    },
  },
  actions: {
    Login(sotre);,
  },
  modules: {},
});
