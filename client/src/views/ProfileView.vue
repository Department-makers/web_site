<script>
import ServiceUser from '../services/ServiceUser'
import ServiceStudent from '../services/ServiceStudent'
export default {
  data(){
    return {
      userData: {first_name:"", second_name:""},
      error: null,
      isVerified: false
    }
  },
  methods: {
    async getToLoginPage () {
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
    this.isVerified = (await (ServiceStudent.is_verifyed(this.$store.state.user_id))).data.is_verified
    this.userData = (await (ServiceUser.info(this.$store.state.user_id))).data
  }
}
</script>

<template>
  <div class="content my-3 mb-6">
    <div class="container">
        <h1>{{ userData.second_name }} {{ userData.first_name }}</h1>
        <div class="text-muted mb-4">01.03.02 Прикладная математика и информатика, Очная, Институт математики и компьютерных технологий (Школа)</div>
          <div class="row mt-4">
            <div class="col-12 col-md-8 col-lg-9">
                <div class="card shadow-sm p-2">
                    <div class="card-body">
                      <div class="tab-content"><div id="w1-tab0" class="fade show tab-pane active">
                      <div class="row">
                        <div class="col-12 col-lg-3">
                          <div id="jsUserPhoto" class="profile__user-photo mb-3">
                            <input class="csrf" type="hidden" data-name="_csrf_univer" data-value="feNdGAvGX2WuRtgPqRgRd4efLs2OMqrU3UrEuCP_LksiiBNOMq5qHOsyk2H5fSY478p4jud8kq7rGZXRWrlaCg==">
                              <input type="file" class="d-none">
                              <button class="btn profile__user-photo-add hover w-100 m-0 d-flex flex-column justify-content-center align-items-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                <div class="mt-1">
                                Загрузить фотографию            
                                </div>
                              </button>
                              <div class="f-XS lh-100 text-muted mb-1" style="display: block;">Макс. размер 5 МБ, в формате jpg</div>
                          </div>    
                        </div>
                        <div class="col-12 col-lg-9 row">
                            <div class="col-12 col-lg-4 mb-1 mb-lg-3">Имя</div>
                            <div class="col-12 col-lg-8 mb-3">{{ userData.first_name }}</div>
                          <div class="w-100"></div>
                            <div class="col-12 col-lg-4 mb-1 mb-lg-3">Фамилия</div>
                            <div class="col-12 col-lg-8 mb-3">{{ userData.second_name }}</div>
                          <div class="w-100"></div>
                            <div class="col-12 col-lg-4 mb-1 mb-lg-3">Адрес эл. почты:</div>
                            <div class="col-12 col-lg-8 mb-3">{{ userData.email }}</div>
                          <div class="w-100"></div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<style>

</style>
