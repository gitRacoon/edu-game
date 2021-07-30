<template>
  <main class="main">
    <h1>Remember and open all green cells</h1>
    <div class="wrap" :class="{ lock }">
      <div
        class="item animate__animated"
        :class="{
          show: bar.show,
          animate__headShake: bar.show,
          pick: bar.pick && bar.order,
          miss: bar.pick && !bar.order,
          lock: bar.pick,
        }"
        v-for="(bar, foo) of visibleField"
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
      found: 0,
      initField: [],
      lock: true,
      lvl: 0,
      shutdown: false,
      visibleField: [],
    };
  },
  mounted() {
    for (let foo = 0; foo < 16; foo++) {
      this.initField.push({
        order: false,
        pick: false,
        show: false,
      });
    }
    return (this.visibleField = [...this.initField]);
  },
  methods: {
    init(value) {
      switch (value) {
        case "start":
          this.lvl = 0;
        case "next":
          this.initField[this.lvl].order = true;
          this.lvl++;
          break;
      }

      this.lock = true;
      this.shutdown = true;
      this.found = 0;
      this.behavior = "restart";

      for (let foo = 0; foo < 16; foo++) {
        this.visibleField[foo].pick = false;
      }
      for (let foo = 0; foo < this.lvl; foo++) {
        this.initField[foo].show = true;
      }

      this.visibleField.sort(() => Math.random() - 0.5);

      setTimeout(() => {
        for (let foo = 0; foo < this.lvl; foo++) {
          this.initField[foo].show = false;
        }
        this.shutdown = false;
        this.lock = false;
        this.timer = 300;
      }, 1000);
    },
    checkup(foo) {
      this.visibleField[foo].pick = true;

      if (this.visibleField[foo].order) {
        this.found++;
      } else {
        this.behavior = "lose";
        this.lock = true;
      }

      if (this.found === this.lvl && this.lvl < 8) {
        this.behavior = "next";
        this.lock = true;
      } else if (this.found === this.lvl && this.lvl === 8) {
        this.lvl = "MAX";
        this.behavior = "start";
        this.lock = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  grid-gap: 10px;

  width: 300px;
  margin: 20px 0 10px 0;
}

.item {
  width: 60px;
  height: 60px;
  background: url("../assets/fish-box.png") no-repeat center/cover;

  transition: all 0.1s linear;
  cursor: pointer;

  &.show {
    background: url("../assets/fish.png") no-repeat center/cover;
  }

  &.pick {
    border: 2px solid #20b2aa;
  }

  &.miss {
    border: 4px solid #ff6347;
  }
}
</style>
