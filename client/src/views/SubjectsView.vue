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
  <header >
    <div class="content mt-5">
      <div class="container" style="width:fit-content">
        <h1>Учебные дисциплины</h1>
        <div class="row mt-1">
          <div class="card">
            <div class="card-body" id="chat-messages">
                <b-container fluid style="position:relative; overflow-y:auto; height:500px">
                    <div class="my-3" v-for="subject in subjects">

                    </div>
                </b-container>
              </div>
            </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>

</style>
