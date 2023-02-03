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
    this.isMyMessage = (this.$store.state.user.user_id == this.user_id)
  },
}
</script>

<template>
    <div class="card p-1" v-bind:class="{'my-message': (isMyMessage), 'other-message': (!isMyMessage)}" id="chat-outer">
        <label style="color:rgb(240, 240, 240)">
            {{ name }}
        </label>
        <label style="color:rgb(165, 165, 165); font-size: x-small">
            {{ date }}
        </label>
        <label style="color:white">
            {{ text }}
        </label>
    </div>
</template>

<style scoped>
.my-message{
  text-align: end;
  background-color: #1c507ad3;
}

.other-message{
  text-align: start;
  background-color: rgba(48, 48, 48, 0.781);
}

</style>