<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="`This is article ${$route.params.id}`" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { HelloWorld },
});
</script>
