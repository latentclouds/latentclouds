<template>
  <div id="app">
    <img class="company-logo" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome! This site is under construction." />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .company-logo {
    width: 200px;
  }
}
</style>
