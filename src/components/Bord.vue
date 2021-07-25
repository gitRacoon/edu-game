<template>
  <h1>Remember and open all green cells</h1>
  <div class="wrapper" :class="{ lock: lock }">
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
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <div class="buttons">
    <a href="/" class="menu-link" aria-label="Go to the menu."></a>
    <button
      class="play-btn"
      :class="[behavior]"
      :disabled="shutdown"
      @click="report()"
    >
      {{ behavior }}
    </button>
    <button class="cup-btn" aria-label="Open a list of achievements."></button>
  </div>
</template>

<script>
export default {
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
    report() {
      //* Реагирует на главную кнопку.
      switch (this.behavior) {
        case "start":
        case "next":
          this.advance();
          break;
        case "replay":
          this.setzero();
          this.advance();
          break;
        case "restart":
          this.locker();
          break;
        default:
          break;
      }
      this.found = 0;
      this.dismiss();

      this.reveal();
      setTimeout(this.reveal, 1000);
      setTimeout(this.locker, 1000);

      this.visibleField.sort(() => Math.random() - 0.5);
    },
    checkup(foo) {
      //* Реагирует на выбор ячейки.
      this.visibleField[foo].pick = true;

      if (this.visibleField[foo].order) {
        this.found++;
      } else {
        this.behavior = "lose";
        this.locker();
      }

      if (this.found === this.lvl && this.lvl < 12) {
        this.behavior = "next";
        this.locker();
      } else if (this.found === this.lvl && this.lvl === 12) {
        this.lvl = "MAX";
        this.behavior = "replay";
        this.locker();
      }
    },
    reveal() {
      //* Переключает видимость загаданных ячеек.
      this.shutdown = !this.shutdown;
      for (let foo = 0; foo < this.lvl; foo++) {
        this.initField[foo].show = !this.initField[foo].show;
      }
    },
    advance() {
      //* Увеличивает сложность.
      if (this.lvl < 12) {
        this.initField[this.lvl].order = true;
        this.lvl++;
      }
    },
    dismiss() {
      //* Очищает выбранные ячейки.
      for (let foo = 0; foo < 25; foo++) {
        this.visibleField[foo].pick = false;
      }

      this.behavior = "restart";
      this.shutdown = false;
    },
    setzero() {
      //* Обнуляет поле.
      this.lvl = 0;
      for (let foo = 0; foo < 25; foo++) {
        this.visibleField[foo].order = false;
        this.visibleField[foo].pick = false;
        this.visibleField[foo].show = false;
      }
    },
    locker() {
      //* Блокирует и разблокирует поле.
      this.lock = !this.lock;
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(5, 1fr);
  grid-gap: 10px;

  width: 300px;
  margin: 20px 0;
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

.lvl {
  font-family: inherit;
  font-size: 1.2rem;
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

  &:hover {
    opacity: 0.8;
  }

  &.restart {
    background-color: darksalmon;
  }

  &:disabled {
    background-color: lightgray;
  }

  &.lose {
    background-color: tomato;
  }
}

.cup-btn {
  width: 30px;
  height: 30px;

  border: none;
  background: url("../assets/cup.svg") no-repeat center/contain;

  cursor: pointer;
}

.lock {
  pointer-events: none;
}
</style>
