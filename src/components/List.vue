<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <slot :item="item"></slot>
      </template>
    </a-list>
    <a-pagination
      v-model:current="page"
      v-model:total="total"
      v-model:pageSize="pageSize"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default function ListComp<T>(
  loadFunc: (page: number, pageSize: number) => PromiseLike<[T[], number]>
) {
  return defineComponent({
    data: () => ({
      total: 0,
      data: [] as T[],
      page: 1,
      pageSize: 20,
      loading: 0,
    }),
    created() {
      this.loadData();
    },
    methods: {
      async loadData() {
        ++this.loading;
        try {
          const [data, total] = await loadFunc(this.page, this.pageSize);
          this.data = reactive(data);
          this.total = total;
        } finally {
          --this.loading;
        }
      },
    },
  });
}
</script>
