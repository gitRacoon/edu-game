<template>
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <div class="buttons">
    <router-link to="/" class="menu-link" aria-label="Go to the menu." />
    <button
      class="play-btn"
      :class="[behavior]"
      :disabled="shutdown"
      @click="$emit('report', behavior)"
    >
      {{ behavior }}
    </button>
    <button class="cup-btn" aria-label="Open a list of achievements."></button>
  </div>
</template>

<script>
export default {
  emits: ["report"],
  props: {
    behavior: {
      type: String,
      required: true,
    },
    lvl: {
      type: [Number, String],
      required: true,
    },
    shutdown: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.lvl {
  font: 600 1.2rem/1.2rem "Zen Loop", cursive;
  letter-spacing: 0.1rem;
}

.buttons {
  display: flex;
  place-content: center;
  place-items: center;
  gap: 15px;

  margin-top: 15px;
}

.menu-link {
  width: 30px;
  height: 20px;

  background: url("../assets/menu.svg") no-repeat center/contain;

  &:hover {
    opacity: 0.85;
  }
}

.play-btn {
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
    opacity: 0.85;
  }

  &:disabled {
    background-color: lightgray;
  }
}

.cup-btn {
  width: 30px;
  height: 30px;

  border: none;
  background: url("../assets/cup.svg") no-repeat center/contain;

  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.85;
  }
}
</style>
