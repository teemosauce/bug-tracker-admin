<script setup>
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../../store";
let router = useRouter();
console.log(router);

let userStore = useUserStore();
console.log(userStore.$state.name);


setTimeout(()=> {
  userStore.$onAction()
}, 5000)
</script>

<template>
  <div class="dashboard">{{ userStore.$state.name }}</div>
</template>
<style>
.dashboard {
  width: 80px;
  height: 80px;
  background-color: aquamarine;
}
</style>