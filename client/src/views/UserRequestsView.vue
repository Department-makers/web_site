<script>
import ServiceDepartment from "../services/ServiceDepartment";
import UserRequest from "@/components/UserRequest.vue";

export default {
  data(){
    return{
        requests: [{student_id: 0}, {student_id: 1}, {student_id: 2}],
        department_id: null,
    }
  },
  components: {
    UserRequest
  },
  methods: {
  async updateRequests(){
    if (this.department_id!=null){
      try {
          const response = (await ServiceDepartment.getDepartamentVerifyList(this.department_id)).data
          this.requests = response.students
          this.error = ""
          } catch (error) {
              this.error = error.response.data.error
          }
    }
  },
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
  async mounted(){
    this.timer = setInterval(() => {
      this.updateRequests()
    }, 400)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <header >
    <div class="content my-5">
      <div class="container" style="width:fit-content">
        <h1>Заявки на регистрацию</h1>
        <div class="row mt-1">
          <div class="card">
            <div class="card-body" id="chat-messages">
                <b-container fluid style="position:relative; overflow-y:auto; height:500px">
                    <div class="my-3" v-for="request in requests">
                        <UserRequest
                            :student_id="request.student_id"
                        ></UserRequest>
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
