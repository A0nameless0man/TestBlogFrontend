<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to My Vue.js + TypeScript + Nestjs App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  components: { HelloWorld },
});
</script>
