<template>
  <main class="main">
    <h1>Open all the cells step by step</h1>
    <div class="wrap" :class="{ lock }">
      <div
        class="item animate__animated"
        :class="{
          show: bar.show,
          animate__headShake: bar.show,
          pick: false,
          miss: false,
          lock: bar.pick,
        }"
        v-for="(bar, foo) of field"
        :key="foo"
        @click="checkup(foo)"
      />
    </div>
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
      lock: false,
      lvl: 0,
      shutdown: false,
      field: [],
    }
  },
  mounted() {
    for (let foo = 0; foo < 25; foo++) {
      this.field.push({
        step: 0,
        pick: 0,
        show: false,
      });
    }
    return this.field;
  },
  methods: {
    init(value) {
      switch (value) {
        case "start":
          this.lvl = 0;
        case "next":
          break;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(5, 1fr);
  grid-gap: 10px;

  width: 300px;
  margin: 20px 0 10px 0;
}

.item {
  width: 50px;
  height: 50px;
  background-color: lightgray;

  transition: all 0.2s linear;
  cursor: pointer;

  &.show {
    background-color: lightseagreen;
  }

  &.pick {
    border: 2px solid lightseagreen;
    box-shadow: inset 0 0 10px lightseagreen;
  }

  &.miss {
    border: 2px solid tomato;
    box-shadow: inset 0 0 10px tomato;
  }
}
</style>
