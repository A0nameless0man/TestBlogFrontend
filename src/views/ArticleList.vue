<template>
  <article-list />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import ListComp from "../components/List.vue";
import { Article } from "../store/entity";
export default defineComponent({
  components: {
    ArticleList: ListComp<Article>(async (page, size) => {
      return (
        await axios.get("/article", { params: { page: page, page_size: size } })
      ).data;
    }),
  },
});
</script>
