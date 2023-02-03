<script>
import GroupsService from '@/services/GroupsService'
import SubjectsService from '@/services/SubjectsService'
import ThemesService from '@/services/ThemesService'
import Chat from "@/components/Chat.vue";

export default {
  data(){
    return{
      groupID: null,
      subjectID: null,
      themeID: null,
      groups: [],
      groupsOptions : [],
      subjectsOptions: [],
      themesOptions: [],
    }
  },
  components: {
    Chat
  },
  methods: {
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
      const subjects = (await SubjectsService.getGroupSubjects(this.groupID)).data
      this.subjectID = null
      this.subjectsOptions = []
      for (var i in subjects){
          this.subjectsOptions.push({value: i, text: subjects[i].name})
        }
    }
  },
  async updateThemes(){
    if (this.subjectID != null){
      const themes = (await ThemesService.getSubjectThemes(this.subjectID)).data
      this.themeID = null
      this.themesOptions = []
      for (var i in themes){
          this.themesOptions.push({value: i, text: themes[i].name})
        }
    }
  }
  },
  beforeMount(){
    this.getToLoginPage()
  },
  async mounted(){
    this.groups = (await GroupsService.index()).data
    if (this.$store.state.user.role_id == 0){
      let group = (await GroupsService.getUserGroup(this.$store.state.user.user_id)).data
      this.groupsOptions.push({value: 0, text: group.short_name})
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
                <div class="card-body p-5 text-center">
                      <div class="form-group" id="form-group">
                        <b-form-select v-model="groupID" class="btn dropdown-toggle btn-light" role="combobox" :options="groupsOptions" id="form-select" @change="updateSubjects">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Выберете группу-</b-form-select-option>
                          </template>
                        </b-form-select>
                      </div>
                      <div class="form-group" id="form-group">
                        <b-form-select v-model="subjectID" class="btn dropdown-toggle btn-light" role="combobox" :options="subjectsOptions" id="form-select" @change="updateThemes">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Выберете дисциплину-</b-form-select-option>
                          </template>
                        </b-form-select>
                      </div>
                      <div class="form-group" id="form-group">
                        <b-form-select v-model="themeID" class="btn dropdown-toggle btn-light" role="combobox" :options="themesOptions" id="form-select" @change="$refs.chatRef.updateChat()">
                          <template #first>
                            <b-form-select-option :value="null" disabled>-Выберете тему-</b-form-select-option>
                          </template>
                        </b-form-select>
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
}
</style>
