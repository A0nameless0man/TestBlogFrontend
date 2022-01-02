<template>
  <div class="home">
    <div v-if="editMode">
      <article-editor :article="localArticle" @update="update" />
      <a-button
        type="primary"
        style="margin: 10px"
        :disabled="loading"
        @click="submit"
        >Save</a-button
      >
    </div>
    <div v-else>
      <h2>{{ localArticle.title }}</h2>
      <markdown-render :content="localArticle.content" />
    </div>
    <a-button
      type="primary"
      style="margin: 10px"
      v-if="$store.getters.user.id === localArticle.user?.id"
      @click="editMode = !editMode"
      >{{ editMode ? "QuitEditMode" : "Edit" }}</a-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import ArticleEditor from "@/components/ArticleEditor.vue";
import { Article } from "@/store/entity";
import axios from "axios";
import MarkdownRender from "@/components/MarkdownRender.vue";

export default defineComponent({
  data: () => ({
    localArticle: { content: "", title: "", id: 0 } as Article,
    loading: false,
    editMode: false,
  }),
  components: { ArticleEditor, MarkdownRender },
  created() {
    this.loadData(this.$route.params.id as string);
  },
  beforeRouteUpdate(to) {
    this.loadData(to.params.id as string);
  },
  methods: {
    update(payload: Article) {
      this.localArticle.content = payload.content;
      this.localArticle.title = payload.title;
    },

    async submit() {
      this.loading = true;
      try {
        const resp = await axios.post(
          `/article/${this.localArticle.id}`,
          this.localArticle
        );
        this.editMode = false;
      } finally {
        this.loading = false;
      }
    },
    async loadData(id: string) {
      this.loading = true;
      try {
        const resp = await axios.get(`/article/${id}`);
        this.localArticle = reactive(resp.data);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
