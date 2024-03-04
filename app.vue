<template>
  <div>
    <navbar />
  </div>
</template>

<script setup lang="ts">
import navbar from "./src/components/navbar.vue";

useHead({
  title: "Raiden Fernando",
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

body {
  background-color: black;
}
</style>
