<template>
  <main class="main">
    <bord />
  </main>
</template>

<script setup>
import Bord from "./components/Bord.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  align-items: center;

  width: 320px;
  height: 100vh;
  min-height: 500px;
  max-height: 700px;

  padding: 10px;
  margin: 0 auto;

  font-family: "Zen Loop", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightseagreen;
}
</style>
