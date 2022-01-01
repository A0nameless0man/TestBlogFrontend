import axios from "axios";
import { createStore } from "vuex";

const tokenKey = "token";

class User {
  name = "";
  id = 0;
}

type LoginParam = {
  username: string;
  password: string;
};
export class State {
  loginStatus = "";
  token: string = localStorage.getItem(tokenKey) || "";
  user: User = new User();
}

export default createStore({
  state: new State(),
  mutations: {
    auth_request(state: State) {
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
    async Login(context, param: LoginParam) {
      context.commit("auth_request");
      try {
        const resp = await axios.post("/login", param);
        const token = resp.data.token as string;
        const user = resp.data.user as User;
        localStorage.setItem(tokenKey, token);
        axios.defaults.headers.common["X-Auth-Token"] = token;
        context.commit("auth_success", [token, user]);
        return resp;
      } catch (error) {
        if (error instanceof Error) {
          context.commit("auth_error", error.message);
        }
      }
    },
    async Logout(context) {
      context.commit("auth_request");
      try {
        await axios.post("/logout");
      } finally {
        localStorage.removeItem(tokenKey);
        delete axios.defaults.headers.common["X-Auth-Token"];
        context.commit("auth_quit");
      }
    },
  },
  modules: {},
  getters: {
    loggedIn(state: State) {
      return state.loginStatus === "success";
    },
  },
});
