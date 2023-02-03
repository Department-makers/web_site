<script>
import ChatMessage from "@/components/ChatMessage.vue";
import ServiceMessage from "../services/ServiceMessage";

export default {
  data(){
    return{
        message: "",
        error: "",
        messages: [],
        timer: null,
    }
  },
  props: {
    themeID: 0,
  },
  components: {
    ChatMessage
  },
  methods: {
    async updateChat(){
        if (this.themeID!=null){
            try {
                const response = (await ServiceMessage.getMessagePerson(this.$store.state.user_id, this.themeID)).data
                this.messages = response.messages_id
                this.error = ""
                } catch (error) {
                    this.error = error.response.data.error
                }
        }
    },
    async sendMessage(){
        if (this.message!=""){
            const date = new Date();
            const currentDate = `${date.getDate()}/${ date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            try {
            const response = await ServiceMessage.createMessage({
                user_id: this.$store.state.user.user_id,
                topic_id: this.themeID,
                text: this.message,
                sent: currentDate,
                file: "",
                private: 0,
            })
            this.message = ""
            this.error = ""
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
  },
  async mounted(){
    this.timer = setInterval(() => {
      this.updateChat()
    }, 400)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<template>
    <div class="card">
        <div class="card-body" id="chat-messages">
            <b-container fluid style="position:relative; overflow-y:auto; height:500px">
                <div class="my-3" v-for="message in messages">
                    <ChatMessage
                        :user_id="message.user_id"
                        :name="message.user_id"
                        :text="message.text"
                        :date="message.sent"
                    ></ChatMessage>
                </div>
            </b-container>
        </div>
        <form id="form-inner" @submit.prevent="sendMessage">
            <div class="card" id="send-message">
                <div class="row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control form-control" v-model="message" placeholder="">
                    </div>
                    <div class="col-sm-auto" id="submit-button-outer">
                        <button type="submit" id="submit-button-inner" class="btn btn-primary">
                            <b-icon-chat-dots></b-icon-chat-dots>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
textarea{
    resize: none;
    max-height: 20px;
}

#submit-button-outer{
    vertical-align: auto;
}

#submit-button-inner{
    vertical-align: 0;
}

#chat-messages{
    background-color: rgba(220, 235, 255, 0);
    margin-bottom: auto;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 1%;
}

#send-message{
    margin: 0%;
    padding: 2%;
}
</style>