<script>
export default {
  methods: {
  getToProfilePage () {
    this.$router.push({
    name: 'profile'
    })
  },
  },
  beforeMount(){
    this.getToProfilePage()
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
