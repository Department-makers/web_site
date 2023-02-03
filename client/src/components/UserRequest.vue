<script>
import ServiceUser from '../services/ServiceUser';

export default {
  data(){
    return{
      userData: {},
      error: "",
    }
  },
  components: {

  },
  methods: {
    async verify(){
      try {
            const response = await ServiceUser.verify({
              user_id: this.student_id
            })
            } catch (error) {
                this.error = error.response.data.error
            }
    },
    async reject(){
      try {
            const response = await ServiceUser.reject({
              user_id: this.student_id
            })
            } catch (error) {
                this.error = error.response.data.error
            }
    },
  },
  props: {
    student_id: 0,
  },
  async mounted(){
    this.userData = (await (ServiceUser.info(student_id))).data
  },
}
</script>

<template>
    <div class="card p-1 fs-6 fw-bold" style="text-align: start; background-color: rgb(213 230 235)" id="request-outer">
        <label style="color:rgb(70, 70, 70)">
            {{userData.second_name}} {{ userData.first_name }} {{ student_id }}
        </label>
        <div class="row">
          <button type="submit" class="col-sm-auto fs-5" v-on:click="verify()" style="color:green">
            <b-icon class="img-responsive" icon="check-circle" aria-hidden="true"></b-icon>
          </button>
          <button type="submit" class="col-sm-auto fs-5" v-on:click="reject()" style="color:red">
            <b-icon class="img-responsive" icon="dash-circle" aria-hidden="true"></b-icon>
          </button>
        </div>
    </div>
</template>

<style scoped>

</style>