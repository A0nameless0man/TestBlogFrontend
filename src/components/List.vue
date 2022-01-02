<template>
  <div>
    <a-list
      item-layout="horizontal"
      :data-source="data"
      :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3, xxxl: 2 }"
    >
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

// eslint-disable-next-line
class ListComp<T> {
  gen() {
    return defineComponent({
      data: () => ({
        total: 0,
        data: [] as T[],
        page: 1,
        pageSize: 20,
        loading: 0,
      }),
      props: {
        loadFunc: Function,
      },
      created() {
        this.loadData();
      },
      methods: {
        async loadData() {
          if (!this.loadFunc) {
            return;
          }
          ++this.loading;
          try {
            const [data, total] = await this.loadFunc(this.page, this.pageSize);
            this.data = reactive(data);
            this.total = total;
          } catch (_) {
            this.data = [];
            this.total = 0;
          } finally {
            --this.loading;
          }
        },
      },
    });
  }
}
const l = new ListComp().gen();
export default l;

// eslint-disable-next-line
export function GeneListComp<T>() {
  return l as ReturnType<ListComp<T>["gen"]>;
}
</script>
