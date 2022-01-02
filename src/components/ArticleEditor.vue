<template>
  <div class="article-editor">
    <a-input
      allow-clear
      v-bind:value="article.title"
      v-on:input="(e) => updateTitle(e.target.value)"
    />
    <markdown-editor
      v-bind:loading="loading"
      v-bind:title="article.title"
      v-bind:content="article.content"
      v-on:update="updateContent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownEditor from "@/components/MarkdownEditor.vue";

export default defineComponent({
  props: { article: Object, loading: Boolean },
  data: () => ({ localArticle: { content: "", title: "" } }),
  created() {
    this.localArticle = JSON.parse(JSON.stringify(this.article)) as {
      content: string;
      title: string;
    };
  },
  methods: {
    update() {
      this.$emit("update", this.localArticle);
    },
    updateContent(content: string) {
      this.localArticle.content = content;
      this.localArticle.title = this.article?.title;
      this.update();
    },
    updateTitle(title: string) {
      this.localArticle.title = title;
      this.localArticle.content = this.article?.content;
      this.update();
    },
  },
  components: { MarkdownEditor },
});
</script>
