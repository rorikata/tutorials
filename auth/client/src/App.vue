<template>
    <app-header></app-header>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import header from './components/header.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SecretQuote from './components/SecretQuote.vue';
import Signup from './components/Signup.vue';
export default {
  components: {
    'add-header': header
  },
  data() {
      return {

      }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
