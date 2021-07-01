<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
 <Counter/>
 <sample/>
 
</template>

<script>
import Counter from "./components/Counter.vue";
import sample from "./components/Component.vue";

export default {
  name: 'App',
  components: {
    sample ,
    Counter   
  }
}
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
</style>
