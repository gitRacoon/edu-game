<template>
  <div class="wrapper">
    <div
      class="item"
      :class="{ show: foo.show, pick: foo.pick, }"
      v-for="(foo, i) in visibleField"
      :key="i"
      @click="checkup()"
    />
  </div>
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <button :class="behavior" :disabled="shutdown" @click="report()">{{ behavior }}</button>
</template>

<script>
export default {
  data() {
    return {
      behavior: 'start',
      initField: [],
      lvl: 0,
      shutdown: false,
      visibleField: [],
    };
  },
  methods: {
    report() {  //* Реакция на кнопку.
    switch (this.behavior) {
      case 'start':
      case 'next':
        this.behavior = 'restart';
        this.advance();
        break;
      case 'restart':
        break;
      default:
        console.log('Something went wrong!');
    }

      this.reveal();
      setTimeout(this.reveal, 1000);

      this.visibleField.sort(() => Math.random() - 0.5);
    },
    advance() {  //* Увеличивает сложность.
      if (this.lvl < 12) {
        this.initField[this.lvl].order = true;
        this.lvl++;
      }
    },
    reveal() {  //* Переключает видимость загаданных ячеек.
      this.shutdown = !this.shutdown;
      for (let foo = 0; foo < this.lvl; foo++) {
        this.initField[foo].show = !this.initField[foo].show;
      }
    },
    checkup() {},  //TODO: реакция на нажатие клавиши.
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
  background: lightgray;

  transition: background 0.2s linear;
  cursor: pointer;

  &.show {
    background: lightseagreen;
  }

  &.pick {
    border: 2px solid lightseagreen;
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
  background: lightgray;

  cursor: pointer;
  opacity: 1;
  transition: all .2s linear;

  &:hover {
    opacity: 0.8;
  }

  &.start {
    background: lightseagreen;
  }

  &.restart {
    background: tomato;
  }

  &:disabled {
    background: lightgray;
  }
}
</style>
