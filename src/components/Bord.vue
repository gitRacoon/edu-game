<template>
  <main class="main">
    <h1>Remember Me</h1>
    <nav class="bords-list">
      <router-link
        class="bord-link"
        v-for="(bar, foo) of links"
        :key="foo"
        :to="bar.to"
        :aria-label="bar.label"
        :style="{ backgroundImage: `url(${bar.img})` }"
      />
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: "/classic",
          label: "Open Classic bord.",
          img: "/src/assets/classic.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  place-items: center;

  padding-top: 30px;
}

.bords-list {
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  place-items: center;
  gap: 15px;

  width: 100%;
  max-width: 500px;
  margin-top: 20px;
}

.bord-link {
  display: block;

  width: 80px;
  height: 80px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
