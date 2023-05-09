<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
 {{ msg }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
