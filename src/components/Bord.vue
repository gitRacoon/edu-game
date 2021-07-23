<template>
  <div class="wrapper">
    <div
      class="item"
      :class="{ show: bar.show, pick: bar.pick && bar.order, miss: bar.pick && !bar.order }"
      v-for="(bar, foo) of visibleField"
      :key="foo"
      @click="checkup(foo)"
    />
  </div>
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <button :class="[behavior]" :disabled="shutdown" @click="report()">{{ behavior }}</button>
</template>

<script>
export default {
  data() {
    return {
      behavior: "start",
      initField: [],
      lvl: 0,
      found: 0,
      shutdown: false,
      visibleField: [],
    };
  },
  mounted() {
    for (let foo = 0; foo < 25; foo++) {
      this.initField.push({
        order: false,
        pick: false,
        show: false,
      });
    }
    return (this.visibleField = [...this.initField]);
  },
  methods: {
    report() {  //* Реагирует на главную кнопку.
    switch (this.behavior) {
      case "start":
        this.behavior = "restart";
        this.advance();
        break;
      case "restart":
        break;
      case "lose":
        this.dismiss();
        break;
      case "next":
        this.behavior = "restart";
        this.dismiss();
        this.advance();
        break;
      case "replay":
        this.behavior = "restart";
        this.setzero();
        this.dismiss();
        this.advance();
        break;
      default:
        console.log("Something went wrong!");
    }

      this.reveal();
      setTimeout(this.reveal, 1000);

      this.visibleField.sort(() => Math.random() - 0.5);
    },
    checkup(foo) {  //* Реагирует на выбор ячейки.
      this.visibleField[foo].pick = true;

      if (this.visibleField[foo].order) {
        this.found++;
      } else {
        this.shutdown = true;
        this.behavior = "lose";
        setTimeout(this.report, 1000);
      }

      if (this.found === this.lvl && this.lvl < 12) {
        this.behavior = "next";
      } else if (this.found === this.lvl && this.lvl === 12) {
        this.lvl = 0;
        this.behavior = "replay";
      }
    },
    reveal() {  //* Переключает видимость загаданных ячеек.
      this.shutdown = !this.shutdown;
      for (let foo = 0; foo < this.lvl; foo++) {
        this.initField[foo].show = !this.initField[foo].show;
      }
    },
    advance() {  //* Увеличивает сложность.
      if (this.lvl < 12) {
        this.initField[this.lvl].order = true;
        this.lvl++;
      }
    },
    dismiss() {  //* Очищает выбранные ячейки.
      for (let foo = 0; foo < 25; foo++) {
        this.visibleField[foo].pick = false;
      }

      this.found = 0;
      this.behavior = "restart";
      this.shutdown = false;
    },
    setzero() {
      for (let foo = 0; foo < 25; foo++) {
        this.visibleField[foo].order = false;
        this.visibleField[foo].pick = false;
        this.visibleField[foo].show = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
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

.lvl {
  font-family: inherit;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}

button {
  padding: 5px 20px;

  font-family: inherit;
  font-size: 1rem;
  line-height: 1rem;
  color: white;
  text-transform: capitalize;

  border: none;
  border-radius: 5px;
  background-color: lightgray;

  cursor: pointer;
  opacity: 1;
  transition: all .2s linear;

  &:hover {
    opacity: 0.8;
  }

  &.replay,
  &.next,
  &.start {
    background-color: lightseagreen;
  }

  &.restart {
    background-color:darksalmon;
  }

  &:disabled {
    background-color: lightgray;
  }

  &.lose {
    background-color: tomato;
  }
}
</style>
