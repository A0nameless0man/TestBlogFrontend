<template>
  <div class="markdowneditor">
    <a-textarea :value="content" @input="update"></a-textarea>
    <markdown-render v-bind:loading="loading" v-bind:content="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownRender from "@/components/MarkdownRender.vue";
export default defineComponent({
  props: { content: String, loading: Boolean },
  methods: {
    update(e: { target: { value: string } }) {
      this.$emit("update", e.target.value);
    },
  },
  components: { MarkdownRender },
});
</script>

<style scoped>
.markdowneditor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  display: flex;
  align-items: stretch;
}
.markdowneditor textarea,
.markdowneditor div {
  display: inline-block;
  flex: 1;
}
.markdowneditor textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
code {
  color: #f66;
}
</style>
