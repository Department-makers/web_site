<script>
import ServiceUser from '../services/ServiceUser'
import ServiceGroup from '../services/ServiceGroup'
import ServiceAuthentication from '../services/ServiceAuthentication'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      groupID: 0,
      departmentID: 0,
      roleID: 0,
      email: '',
      password: '',
      error: null,
      Logging: true,
      roles: [  { value: 0, text: 'Студент' },
                { value: 1, text: 'Преподаватель' },],
      groupsOptions : [],
    }
  },
  async mounted () {
    const groups = (await ServiceGroup.groupList()).data.groups
    for (var i in groups){
        this.groupsOptions.push({value: i, text: await ServiceGroup.groupInfo(i).short_name})
    }
  },
  methods: {
    async switchMode () {
        this.Logging = !(this.Logging);
        return;
    },
    async submit () {
        if (this.Logging) {
            try {
            const response = await ServiceAuthentication.getJwtByLogin({
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('setAccessToken', response.data.access_token)
            this.$store.dispatch('setUpdateToken', response.data.refresh_token)
            const checkRes = await ServiceAuthentication.checkJwt(this.$store.state.access_token, this.$store.state.refresh_token)
            this.$store.dispatch('setUserID', checkRes.data.user_id)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
        else {
            try {
            const response = await ServiceUser.create({
                first_name: this.firstName,
                second_name: this.lastName,
                role_id: this.roleID + 1,
                email: this.email,
                password: this.password,
                photo_path: {},
                is_verified: false,
                groupID: this.groupID,
            })
            this.$store.dispatch('setAccessToken', response.data.access_token)
            this.$store.dispatch('setUpdateToken', response.data.refresh_token)
            this.response = await ServiceAuthentication.checkJwt(this.$store.state.access_token, this.$store.state.refresh_token)
            this.$store.dispatch('setUserID', response.data.user_id)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    },
  }
}
</script>

<template>
    <div class="form-outline mb-4 fixed-center" id="form-body">
        <form id="form-inner" @submit.prevent="submit">
            <h3>{{ this.Logging ? 'Войти' : 'Зарегестрироваться' }}</h3>

            <div class="form-group" id="form-firstName" v-show="!Logging">
                <label>Имя</label>
                <input type="text" class="form-control form-control" v-model="firstName" placeholder="">
            </div>

            <div class="form-group" id="form-lastName" v-show="!Logging">
                <label>Фамилия</label>
                <input type="text" class="form-control form-control" v-model="lastName" placeholder="">
            </div>

            <div class="form-role" id="form-role" v-show="!Logging">
                <label>Роль</label>
                <b-form-select v-model="roleID" :options="roles" id="form-role-inner"></b-form-select>
            </div>

            <div class="form-group" id="form-group" v-show="!Logging && roleID == 0">
                <label>Группа</label>
                <b-form-select v-model="groupID" :options="groupsOptions" id="form-group-inner">
                </b-form-select>
            </div>

            <div class="form-group" id="form-email">
                <label>Адрес электронной почты</label>
                <input type="email" class="form-control form-control" v-model="email" placeholder="">
            </div>
 
            <div class="form-group" id="form-password">
                <label>Пароль</label>
                <input type="password" class="form-control form-control" v-model="password" placeholder="" autocomplete="on"
                pattern="(?=.*\d)(?=.*[a-zA-Z0-9]).{8,32}" title="Только буквы латинского алфавита и цифры. Длина пароля от 8 до 32 символов." required>
            </div>
            
            <div class="submit-button" id="form-submit">
            <button type="submit" class="btn btn-primary btn-block mb-4">{{ this.Logging ? 'Войти' : 'Зарегестрироваться' }}</button>
            </div>

            <div class="error" v-html="error"/>

            <div class="switch-mode" id="form-switch">
            <div>{{ this.Logging ? "Нет учётной записи?" : 'Уже есть учётная запись?' }}</div>
            <button v-on:click="switchMode()" type="button" class="btn btn-link" id="form-switch-button">{{ this.Logging ? 'Зарегестрироваться' : 'Войти' }}</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.error {
    color: red;
}

#form-body {
    text-align:center;
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
}

#form-inner {
    margin-top: 5%;
    border-radius: 5%;
    align-self: center;
    background-color: rgb(26, 70, 136);
    padding: 2%;
    justify-content: center;
    color: rgb(235, 235, 235);
}

#form-submit{
    padding: 5%;
}

#form-name{
    text-align: center;
}

#form-role{
    align-self: center;
    padding: 2%;
    justify-content: center;
}

#form-role-inner{
    border-radius: 5%;
    align-self: center;
    background-color: rgb(235, 235, 235);
    padding: 1%;
    justify-content: center;
    color: rgb(39, 39, 39);
}

#form-department{
    align-self: center;
    padding: 2%;
    justify-content: center;
}

#form-department-inner{
    border-radius: 5%;
    align-self: center;
    background-color: rgb(235, 235, 235);
    padding: 1%;
    justify-content: center;
    color: rgb(39, 39, 39);
}

#form-group{
    align-self: center;
    padding: 2%;
    justify-content: center;
}

#form-group-inner{
    border-radius: 5%;
    align-self: center;
    background-color: rgb(235, 235, 235);
    padding: 1%;
    justify-content: center;
    color: rgb(39, 39, 39);
}

</style>