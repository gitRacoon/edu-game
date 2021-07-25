<template>
  <main class="main">
    <h1>Remember Me</h1>
    <nav class="bords-list">
      <router-link
        to="/classic"
        class="bord-link"
        aria-label="Open Classic bord."
      />
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {};
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 10px;

  margin-top: 20px;
}

.bord-link {
  display: block;

  width: 100px;
  height: 100px;

  background: url("../assets/classic.svg") no-repeat center/cover;
}
</style>
