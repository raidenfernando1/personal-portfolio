<template>
  <div>
    <NuxtLayout>
      <!-- <NuxtPage /> -->
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Raiden Fernando',
})
</script>

<style>
:root {
  --background-color: rgb(10, 10, 10);
  --primary-color: white;
  --btn-active-color: white;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background-color: var(--background-color);
}
</style>
