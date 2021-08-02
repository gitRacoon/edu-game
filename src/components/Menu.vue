<template>
  <main class="main menu">
    <h1>Remember Me</h1>
    <nav class="bords-list">
      <router-link
        class="bord-link"
        v-for="(bar, foo) of links"
        :key="foo"
        :to="bar.to"
        :class="bar.img"
      >
        Classic
      </router-link>
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
          label: "Classic",
          img: "classic",
        },
      ],
    };
  },
};
</script>
