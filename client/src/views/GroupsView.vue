<script>
import ServiceGroup from '../services/ServiceGroup';
import ServiceDepartment from '../services/ServiceDepartment';
import ServiceTopic from '../services/ServiceTopic';
import ServiceUser from '../services/ServiceUser';
import Chat from "@/components/Chat.vue";

export default {
  data(){
    return{
      userData: {role_id: 0},
      groupID: null,
      subjectID: null,
      themeID: null,
      groups: [],
      groupsOptions : [{value: 0, text: "СП-3"}, {value: 1, text: "СП-2"},],
      subjectsOptions: [{value: 0, text: "СП-3-Матан"}, {value: 1, text: "СП-3-Базы Данных"}],
      themesOptions: [],
      newThemeTitle: "",
    }
  },
  components: {
    Chat
  },
  methods: {
    async newTheme(){
    if (this.newThemeTitle != "" && this.subjectID != null){
      try {
            const response = await ServiceTopic.createTopic({
                subject_id: this.subjectID,
                name: this.newThemeTitle,
            }).data
            if (response.code == 0){
              this.updateThemes()
            }
            this.newThemeTitle = ""
            this.error = ""
            } catch (error) {
                this.error = error.response.data.error
            }
    }
  },
  async removeTheme(){
    if (this.themeID != null){
      try {
            const response = await ServiceTopic.removeTopic({
                topic_id: this.themeID
            }).data
            if (response.code == 0){
              this.updateThemes()
            }
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
  },
  async updateSubjects(){
    if (this.groupID != null){
      this.themesOptions = []
      this.themeID = null
      const subjects = (await ServiceGroup.groupSubject(this.groupID)).data 
      this.subjectID = null
      this.subjectsOptions = [{value: 0, text: "СП-3-Матан"}, {value: 1, text: "СП-3-Базы Данных"}]
      for (var i in subjects){
        if (subjects[i].name != null) {
          this.subjectsOptions.push({value: i, text: subjects[i].name})
        }
        }
    }
  },
  async updateThemes(){
    if (this.subjectID != null){
      const themes = (await ServiceTopic.getTopicsSubject(this.subjectID)).date
      this.themeID = null
      this.themesOptions = [{value: 0, text: "Скоро экзамен"},]
      for (var i in themes){
        if (themes[i].name != null) {
          this.themesOptions.push({value: i, text: themes[i].name})
        }
        }
    }
  }
  },
  beforeMount(){
    this.getToLoginPage()
  },
  async mounted(){
    this.userData = (await (ServiceUser.info(this.$store.state.user_id))).data
    let userGroupID = (await ServiceGroup.getGroup(this.$store.state.user_id)).data
    let userGroup = (await ServiceGroup.groupInfo(userGroupID)).data
    this.groups = await ServiceDepartment.getDepartamentGroup(userGroup.department_id).data
    if (this.$store.state.user.role_id == 1){
      this.groupsOptions.push({value: 0, text: userGroup.short_name})
      this.groupID = 0
      this.updateSubjects()
    } else{
      for (var i in this.groups){
        this.groupsOptions.push({value: i, text: this.groups[i].short_name})
      }
    }
  },
}
</script>

<template>
    <header>
      <div class="content my-3 mb-6">
        <div class="container">
          <h1>Групповые чаты</h1>
          <div class="row mt-1">
            <div class="col-12 col-md-4 col-lg-3">
              <div class="card shadow-sm">
                <div class="card-body p-auto text-center">
                      <div class="form-group" id="form-group" v-show="userData.role_id != 1">
                        <b-form-select v-model="groupID" class="fs-6 fw-bold form-select btn btn-light" role="combobox" :options="groupsOptions" id="form-select" @change="updateSubjects">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Группа-</b-form-select-option>
                          </template>
                        </b-form-select>
                      </div>
                      <div class="form-group" id="form-group">
                        <b-form-select v-model="subjectID" class="fs-6 fw-bold form-select btn btn-light" role="combobox" :options="subjectsOptions" id="form-select" @change="updateThemes">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Дисциплина-</b-form-select-option>
                          </template>
                        </b-form-select>
                      </div>
                      <div class="form-group" id="form-group">
                        <b-form-select v-model="themeID" class="fs-6 fw-bold form-select btn btn-light" role="combobox" :options="themesOptions" id="form-select" @change="$refs.chatRef.updateChat()">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Раздел-</b-form-select-option>
                          </template>
                        </b-form-select>
                      </div>
                      <div class="row" id="topicsControls" v-show="themeID!=null">
                          <button type="submit" class="fs-5 btn col-sm-auto" v-on:click="removeTheme()" style="color:red">
                            <b-icon-dash-circle></b-icon-dash-circle>
                          </button>
                        <div class="col-sm w-50">
                            <input type="text" class="form-control" v-model="newThemeTitle" placeholder="Новый раздел">
                        </div>
                          <button type="submit" class="fs-5 btn col-sm-auto" v-on:click="newTheme()" style="color:green">
                            <b-icon-plus-circle></b-icon-plus-circle>
                          </button>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8 col-lg-5" v-show="themeID!=null">
              <div class="card shadow-sm">
                <Chat 
                  :themeID="this.themeID"
                  ref="chatRef"
                ></Chat>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<style>
#form-group{
  align-self: center;
  padding: 2%;
  justify-content: center;
}

#form-select{
  border-radius: 5%;
  padding: 1%;
  font-family: "Gill Sans", sans-serif;
}

</style>
