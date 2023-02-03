<script>
export default {
  data(){
    return{

    }
  },
  components: {

  },
  methods: {

  },
  props: {
    user_id: null,
    name: "",
    text: "",
    date: "",
  }
}
</script>

<template>
    <div class="card p-1">
        <label>
            {{ name }}
        </label>
        <label>
            {{ date }}
        </label>
        <label>
            {{ text }}
        </label>
    </div>
</template>

<style scoped>

</style>