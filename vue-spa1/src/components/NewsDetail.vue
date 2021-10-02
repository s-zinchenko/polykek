<template>
  <div v-for="i in Articles" :key="i.name">
    <div
        v-if="i.id == pageID"
        class="neumorphism-box">
      <h1>{{ i.name }}</h1>
      <p>{{ i.desc }}</p>
      <p>...</p>
      <p>{{ i.date }}</p>
    </div>
  </div>
</template>

<script>
import Articles from '../../public/articles.json';
export default {
  name: 'NewsDetail',

  data() {
    return {
      Articles,
    }
  },
  computed: {
    pageID() {
      return this.$route.params.id;
    },
  }
}
</script>

<style scoped>
.neumorphism-box {
  margin-top: 40px;
  width: 30%;
  color: #fff;
  border-radius: 50px;
  background-color: #f0f0f3;
  box-shadow: 10px 10px 21px #d3d3d6,
  -10px -10px 21px #fff;
}
p {
  color: black;
}

h1 {
  padding-top: 50px;
  color: black;
}

a {
  font-weight: bold;
  color: black;
  font-size: large;
}
</style>