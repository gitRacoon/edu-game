<template>
  <div class="bord-nav">
    <div class="lvl">
      Complexity: <strong>{{ lvl }}</strong>
    </div>
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
      <button class="up-btn" aria-label="Open a list of achievements."></button>
    </div>
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
