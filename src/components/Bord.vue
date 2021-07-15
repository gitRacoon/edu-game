<template>
  <div class="wrapper">
    <div
      class="item"
      :class="{ search: foo.search }"
      v-for="(foo, bar) in fields"
      :key="bar"
      @click="check"
    />
  </div>
  <p class="lvl">
    Complexity: <strong>{{ lvl }}</strong>
  </p>
  <button class="start-btn" @click="beginGame()">Start</button>
</template>

<script>
export default {
  data() {
    return {
      lvl: 0,
      fields: [],
    };
  },
  methods: {
    init() {
      this.fields = [];

      for (let foo = 0; foo < this.lvl; foo++) {
        this.fields.push({
          clicked: true,
          search: true,
        });
      }

      for (let foo = 0; foo < 25 - this.lvl; foo++) {
        this.fields.push({
          clicked: false,
          search: false,
        });
      }
    },
    hideSearch() {
      for (let foo in this.fields) {
        this.fields[foo].search = false;
      }
    },
    shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5);
    },
    beginGame() {
      console.log("start");
      if (this.lvl < 12) this.lvl++;
      this.init();
      this.shuffle(this.fields);
    },
  },
  mounted() {
    this.init();
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

  cursor: pointer;
}

.search {
  animation: search 2s linear;
}

@keyframes search {
  10% {
    transform: rotateX(180deg);
    background: lightseagreen;
  }
  90% {
    transform: rotateX(180deg);
    background: lightseagreen;
  }
  100% {
    transform: rotateX(0deg);
  }
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
</style>
