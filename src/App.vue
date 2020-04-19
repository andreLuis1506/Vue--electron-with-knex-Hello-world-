<template>
  <div id="app">
    <img alt="Electron logo" src="./assets/logoElectron.png" width="100">
    <img alt="Vue logo" src="./assets/logoVue.png" width="100">
    <img alt="Knex logo" src="./assets/logoKnex.png" width="100">
    <HelloWorld />
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
    //<HelloWorld msg="Welcome to Your Vue.js App"/>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  margin: 5px;
}
</style>
