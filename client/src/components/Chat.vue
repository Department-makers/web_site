<script>
import ChatMessage from "@/components/ChatMessage.vue";
import MessagesService from "../services/MessagesService";

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
                const response = (await MessagesService.getMessagesInTopic(this.$store.state.user.user_id, this.themeID)).data
                this.messages = response.messages_id
                this.error = ""
                } catch (error) {
                    this.error = error.response.data.error
                }
        }
    },
    async sendMessage(){
        if (this.message!=""){
            try {
            const response = await MessagesService.post({
                user_id: this.$store.state.user.user_id,
                topic_id: this.themeID,
                text: this.message,
                sent: "2/2/23",
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

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
</style>