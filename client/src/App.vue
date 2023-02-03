<template>
  <body class="d-flex flex-column min-vh-100">
      <Header />
      <main role="main" class="container-fluid flex-fill">
        <div class="row flex-xl-nowrap2">
          <RouterView />
        </div>
      </main>
      <Footer />
  </body>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body{
  background-color: rgb(224, 232, 233);
}

.flex-fill {
  flex:1 1 auto;
}

main{
  offset-anchor: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
