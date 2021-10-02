<template>
  <div id="nav">
    <img id="polylogo" alt="Vue logo" src="../src/assets/polylogo.png" />
    <div id="links">
      <router-link to="/about">About</router-link>  |
      <router-link to="/news">News</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#polylogo {
  width: 70px;
}

#links {
  align-self: center;
}
</style>
