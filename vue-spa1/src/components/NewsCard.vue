<template>
  <div class="neumorphism-box__container">
    <div
        v-for="i in Articles"
        :key="i.name"
        class="neumorphism-box">
      <router-link :to="{ name: 'NewsDetail', params: { id: i.id } }">{{ i.name }}</router-link>
      <p>{{ i.date }}</p>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Articles from '../../public/articles.json';
export default {
  name: "NewsCard",

  data() {
    return {
      Articles,
    }
  },

}

</script>

<style scoped>
h1 {
  padding: 30px;
  color: black;
}

.neumorphism-box__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

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

a {
  font-weight: bold;
  color: black;
  font-size: large;
}
</style>