<script>
export default {
  methods: {
  getToGroupPage () {
    this.$router.push({
    name: 'groups'
    })
  },
  },
  beforeMount(){
    this.getToGroupPage()
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
