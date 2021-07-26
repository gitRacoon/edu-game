<template>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
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

  font-family: "Zen Loop", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightseagreen;
}

.buttons {
  display: flex;
  place-content: center;
  place-items: center;
  gap: 15px;

  margin-top: 15px;

  & .menu-link {
    width: 30px;
    height: 20px;

    background: url("./assets/menu.svg") no-repeat center/contain;
  }

  & .play-btn {
    display: flex;
    place-items: center;
    place-content: center;

    width: 150px;
    height: 40px;

    font: bold 1.5rem/1.5rem "Zen Loop", cursive;
    color: white;
    text-transform: capitalize;

    border: none;
    border-radius: 5px;
    background-color: lightseagreen;

    user-select: none;
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s linear;

    &.restart {
      background-color: darksalmon;
    }

    &.lose {
      background-color: tomato;
    }

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      background-color: lightgray;
    }
  }

  & .cup-btn {
    width: 30px;
    height: 30px;

    border: none;
    background: url("./assets/cup.svg") no-repeat center/contain;

    cursor: pointer;
  }
}

.lock {
  pointer-events: none;
}
</style>
