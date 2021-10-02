<template>
  <div class="home">
    <NewsCard />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";

export default {
  name: "Home",
  components: {
    NewsCard,
  },
};
</script>
