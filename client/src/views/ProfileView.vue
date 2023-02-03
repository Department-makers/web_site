<script>
export default {
  data () {
    return {
      firstName: this.$store.getters.user.firstName,
      lastName: this.$store.getters.user.secondName,
      groupID: this.$store.getters.user.groupID,
      roleID: this.$store.getters.user.roleID,
      email: this.$store.getters.user.email,
      error: null,
    }
  },
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
    </div>
</header>
</template>

<style>

</style>
