<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="color:red; font-size: x-large" id="info">Info Div</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home {
    text-align: center;
  }
</style>