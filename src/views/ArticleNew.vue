<template>
  <div class="home">
    <article-editor :article="localArticle" @update="update" />
    <a-button
      type="primary"
      style="margin: 10px"
      :disabled="loading"
      @click="submit"
      >Save</a-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleEditor from "@/components/ArticleEditor.vue";
import { Article } from "@/store/entity";
import axios from "axios";

export default defineComponent({
  data: () => ({
    localArticle: { content: "", title: "" },
    loading: false,
  }),
  components: { ArticleEditor },

  methods: {
    update(payload: Article) {
      this.localArticle = payload;
    },
    async submit() {
      this.loading = true;
      try {
        const resp = await axios.post("/article", this.localArticle);
        this.$router.push(`/article/${resp.data.id}`);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
