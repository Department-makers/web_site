<script>
import ServiceSubject from '../services/ServiceSubject'

export default {
  data(){
    return{
        info: {name: "СП-3-Матан"}
    }
  },
  components: {

  },
  methods: {

  },
  props: {
    subject_id: null,
  },
  async mounted(){
    this.info = (await ServiceSubject.subjectInfo(subject_id)).data
  },
}
</script>

<template>
    <div class="card p-1 fs-6 fw-bold" style="text-align: start; background-color: rgb(213 230 235)" id="subject-outer">
        <label style="color:rgb(70, 70, 70)">
            {{ info.name }}
        </label>
    </div>
</template>

<style scoped>

</style>