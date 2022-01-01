<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 8 }"
    autocomplete="off"
    @finish="onSubmit"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
      <a-button
        type="primary"
        html-type="submit"
        :disabled="$store.getters.loading"
        >Submit</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  data: () => ({
    formState: { username: "", password: "" },
  }),
  methods: {
    async onSubmit(val: FormState) {
      await this.$store.dispatch("Login", val);
      if (this.$store.getters.loggedIn) {
        if (typeof this.$route.params["next"] === "string") {
          this.$router.push(this.$route.params["next"]);
        }
        this.$router.back();
      }
    },
  },
});
</script>
