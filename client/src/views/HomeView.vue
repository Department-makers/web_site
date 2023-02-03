<template>
      <div v-if="!($store.state.isUserLoggedIn)">
        <LoginForm/>
      </div>
      <div v-else>
        <TheWelcome/> 
      </div>
</template>

<script>
import TheWelcome from "../components/TheWelcome.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  name: 'App',
  components: {
    TheWelcome,
    LoginForm
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