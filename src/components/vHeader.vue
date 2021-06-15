<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <a href="#" class="header-logo"
          ><img src="../assets/logo.png" alt="logo"
        /></a>
        <h1 class="header-title">{{ nameProject }}</h1>
        <v-dark @upDark="toup()" />
      </div>
    </div>
  </header>
</template>

<script>
import vDark from "./vDark";
export default {
  data() {
    return {
      nameProject: "11 LAB",
      k: null,
    };
  },
  components: {
    vDark,
  },
  methods: {
    toup() {
      this.k = localStorage.dark;
      this.$emit("topDark");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--bg-header);
  padding: 15px;
  &-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &-logo {
    img {
      width: 50px;
    }
  }
  &-title {
    color: var(--text-color);
    align-self: center;
  }
}
</style>
