<template>
  <div>
    <dynamic-article-list :loadFunc="loadData">
      <template v-slot:default="item">
        <a-list-item>
          <a-card :title="item.title">{{ item.user.username }}</a-card>
        </a-list-item>
      </template>
    </dynamic-article-list>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { GeneListComp } from "../components/List.vue";
import { Article } from "../store/entity";
export default defineComponent({
  components: {
    "dynamic-article-list": GeneListComp<Article>(),
  },
  methods: {
    async loadData(page: number, size: number) {
      return (
        await axios.get("/article", { params: { page, page_size: size } })
      ).data;
    },
  },
});
</script>
