<template>
  <a-card v-bind:loading="loading" v-bind:title="title">
    <div class="markdown" v-html="compiledMarkdown"></div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { marked } from "marked";

export default defineComponent({
  props: { title: String, content: String, loading: Boolean },
  computed: {
    compiledMarkdown() {
      return marked(this.content ?? "");
    },
  },
});
</script>

<style scoped>
.markdown {
  text-align: left;
}
</style>
