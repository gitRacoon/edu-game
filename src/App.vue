<template>
  <!-- <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view> -->
  <found-fish />
</template>

<script setup>
import FoundFish from "./components/FoundFish.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  padding: 0 10px;
  margin: 0 auto;

  font-family: 'Aldrich', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f7f7f7;
  filter: drop-shadow();
}

.main {
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;

  height: 100vh;
  min-height: 500px;
}

.lock {
  pointer-events: none;
}
</style>
