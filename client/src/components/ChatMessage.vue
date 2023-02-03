<script>
export default {
  data(){
    return{
      isMyMessage: false,
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
  },
  async mounted(){
    this.isMyMessage = (this.$store.state.user_id == this.user_id)
  },
}
</script>

<template>
    <div class="card p-1" v-bind:class="{'my-message': (isMyMessage), 'other-message': (!isMyMessage)}" id="chat-outer">
        <label style="color:rgb(70, 70, 70)">
            {{ name }}
        </label>
        <label style="color:rgb(110, 110, 110); font-size: x-small">
            {{ date }}
        </label>
        <label style="color:rgb(70, 70, 70)">
            {{ text }}
        </label>
    </div>
</template>

<style scoped>
.my-message{
  text-align: end;
  background-color: #c1e3ffd3;;
}

.other-message{
  text-align: start;
  background-color: rgb(183 183 183);
}

</style>