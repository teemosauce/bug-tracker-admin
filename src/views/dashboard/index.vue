<script setup>
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/index";
import { login, getInfo } from "@/api/user";
import Test from "@/components/Test.vue";

console.log(login);
let router = useRouter();
console.log(router);

let userStore = useUserStore();

console.log(userStore);

let changeName = () => {
  userStore.changeName("小刚");
};

let handleLogin = async () => {
  try {
    await login({
      username: "larry",
      password: "123456",
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="dashboard" @click="handleLogin">{{ userStore.$state.name }}</div>

  <Test></Test>
</template>
<style lang="scss" scoped>
.dashboard {
  width: 80px;
  height: 80px;
  background-color: aquamarine;
}


.test-container {
  background-color: lightblue;
}

:deep(.yellow) {
  background: blue;
}
</style>