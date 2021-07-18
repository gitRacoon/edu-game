<template>
  <div class="wrapper">
    <div
      class="item"
      :class="{ show: foo.show }"
      v-for="(foo, i) in visibleField"
      :key="i"
    />
  </div>
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <button class="start-btn" :disabled="animated" @click="start()">Start</button>
</template>

<script>
export default {
  data() {
    return {
      animated: false,
      initField: [],
      lvl: 0,
      visibleField: [],
    };
  },
  computed: {
    init() {
      for (let foo = 0; foo < 25; foo++) {
        this.initField.push({
          show: false,
          order: false,
        });
      }
      return (this.visibleField = [...this.initField]);
    },
  },
  methods: {
    start() {
      if (this.lvl < 12) {
        this.initField[this.lvl].order = true;
        this.lvl++;
      }

      this.animate();
      setTimeout(this.animate, 1000);

      this.visibleField.sort(() => Math.random() - 0.5);
    },
    animate() {
      this.animated = !this.animated;
      for (let foo = 0; foo < this.lvl; foo++) {
        this.initField[foo].show = !this.initField[foo].show;
      }
    },
  },
};
</script>

<style scoped type="css">
.wrapper {
  display: flex;
  flex-wrap: wrap;

  width: 300px;
  margin: 20px auto;
}

.item {
  width: 50px;
  height: 50px;
  margin: 5px;
  background: lightgray;

  transition: background 0.2s linear;
  cursor: pointer;
}

.show {
  background: lightseagreen;
}

.lvl {
  font-family: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}

.start-btn {
  padding: 5px 20px;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1rem;
  color: white;

  border: none;
  border-radius: 5px;
  background: lightseagreen;

  cursor: pointer;
}

.start-btn:disabled {
  background: lightgray;
}
</style>
