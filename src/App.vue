<template>
  <div style="height: 100%">
    <a-layout style="height: 100%" class="layout">
      <a-layout-header>
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item
            v-if="$store.getters.loggedIn"
            key="logout"
            @click="logout"
            >logout</a-menu-item
          >
          <a-menu-item v-else key="login"
            ><router-link to="/login"> Login</router-link></a-menu-item
          >
          <a-menu-item key="home"
            ><router-link to="/">Home</router-link></a-menu-item
          >
          <a-menu-item key="articlelist"
            ><router-link to="/articlelist"
              >Articlelist</router-link
            ></a-menu-item
          >
        </a-menu>
      </a-layout-header>
      <a-layout-content style="">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    logout() {
      if (confirm("logout")) {
        this.$store.dispatch("Logout");
      }
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
