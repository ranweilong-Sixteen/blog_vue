<template>
  <div>
    个人博客登录
    <lay-button type="primary">原始按钮</lay-button>
    <v-md-editor v-model="text" height="400px" width="1000px"></v-md-editor>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  let text = ref();

</script>

<style scoped>

</style>
