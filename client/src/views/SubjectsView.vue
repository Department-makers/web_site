<script>
import ServiceTeacher from '../services/ServiceTeacher'
import ServiceGroup from '../services/ServiceGroup'
import ServiceDepartment from '../services/ServiceDepartment'
import SubjectInfo from '../components/SubjectInfo.vue'

export default {
  data(){
    return{
      userData: null,
      subjectIds: [],
      subjects: [0,1,2],
    }
  },
  components: {
    SubjectInfo
  },
  methods: {
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
    this.userData = (await (ServiceUser.info(this.$store.state.user_id))).data
    switch(this.userData.role_id) {
    case 1:
      let userGroupID = (await ServiceGroup.getGroup(this.$store.state.user_id)).data
      subjectIds = (await (ServiceGroup.groupSubject(userGroupID))).data;
      break;

    case 2:
      this.subjectIds = (await (ServiceTeacher.teacherSubject(this.$store.state.user_id))).data;
      break;

    case 3:
      let userGroup = (await ServiceGroup.groupInfo(userGroupID)).data
      this.subjectIds = (await (ServiceDepartment.getDepartamentSubject(userGroup.department_id))).data;
      break;
    
    case 4:
      userGroup = (await ServiceGroup.groupInfo(userGroupID)).data
      this.subjectIds = (await (ServiceDepartment.getDepartamentSubject(userGroup.department_id))).data;
      break;

    default:
      userGroup = (await ServiceGroup.groupInfo(userGroupID)).data
      this.subjectIds = (await (ServiceDepartment.getDepartamentSubject(userGroup.department_id))).data;
      break;
  }
  for (var i in this.subjectIds){
        this.subjects.push({value: i, text: this.subjectIds[i].subject_id})
      }
  }
}
</script>

<template>
  <header >
    <div class="content my-5">
      <div class="container" style="width:fit-content">
        <h1>Учебные дисциплины</h1>
        <div class="row mt-1">
          <div class="card">
            <div class="card-body" id="chat-messages">
                <b-container fluid style="position:relative; overflow-y:auto; height:500px">
                    <div class="my-3" v-for="subject in subjects">
                      <SubjectInfo 
                      :subject_id="subject"
                      ></SubjectInfo>
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
