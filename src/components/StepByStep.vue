<template>
  <main class="main">
    <h1></h1>
    <div class="wrap" :class="{ lock }"></div>
    <bord-nav
      :behavior="behavior"
      :lvl="lvl"
      :shutdown="shutdown"
      @report="init"
    />
  </main>
</template>

<script>
import BordNav from "./BordNav.vue";

export default {
  components: { BordNav },
  data() {
    return {
      behavior: "start",
      lock: true,
      lvl: 0,
      shutdown: false,
      visibleField: [],
    }
  },
  mounted() {},
  methods: {
    init(value) {
      switch (value) {
        case "start":
          this.lvl = 0;
          break;
        case "next":
          break;
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
