<script>
export default {
    methods: {
    getToLoginPage () {
      if (!(this.$store.state.isUserLoggedIn)){
        this.$router.push({
        name: 'home'
      })
      }
    }
  },
  beforeMount(){
    this.getToLoginPage()
  },
}
</script>

<template>
    <header>
        <div>
            MainPage
        </div>
    </header>
</template>

<style>

</style>
