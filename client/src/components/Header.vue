<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core';
export default {
  methods: {
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<template>
  <header>
    <b-navbar toggleable="lg" type="primary" variant="info" id="header-body">
      <b-navbar-brand href="/">
         <img src="https://www.dvfu.ru/html/svg/logos/logo_base_ru.svg" class="img-responsive" alt="">
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
  
      <!-- Right aligned nav items -->

        <b-navbar-nav class="ms-auto" v-show="($store.state.isUserLoggedIn)">
  
          <b-nav-item right>
              <RouterLink class="ProfileLink" to="/subjects">
                <button type="submit" class="btn">
                  <img src="https://www.dvfu.ru/html/images/logos/logo_mu_base.png" class="img-responsive" alt="">
                  <label class="btn btn-link">Дисциплины</label>
                </button>
              </RouterLink>
          </b-nav-item>
  
          <b-nav-item right>
              <RouterLink class="ProfileLink" to="/groups">
                <button type="submit" class="btn">
                  <img src="https://www.dvfu.ru/html/images/logos/logo_mu_base.png" class="img-responsive" alt="">
                  <label class="btn btn-link">Группы</label>
                </button>
              </RouterLink>
          </b-nav-item>
  
          <b-nav-item right>
              <RouterLink class="ProfileLink" to="/usersrequests">
                <button type="submit" class="btn">
                  <img src="https://www.dvfu.ru/html/images/logos/logo_mu_base.png" class="img-responsive" alt="">
                  <label class="btn btn-link">Заявки</label>
                </button>
              </RouterLink>
          </b-nav-item>
  
          <b-nav-item-dropdown right class="btn">
            <template #button-content>
              <button type="submit">
                <img src="https://www.dvfu.ru/html/images/logos/logo_mu_base.png" class="img-responsive" alt="">
                <label class="btn btn-link">{{($store.state.user.last_name) || null}} {{($store.state.user.first_name) || null}}</label>
              </button>
            </template>
            <b-dropdown-item href="/me">
              <b-icon icon="person-fill"></b-icon>
              <label class="btn btn-link">Мой кабинет</label>
            </b-dropdown-item>
            <b-dropdown-item class="btn btn-link">
              <button v-on:click="logOut()" class="btn">
                <b-icon icon="power" aria-hidden="true"></b-icon>
                <label class="btn btn-link">Выход</label>
              </button>
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
#header-body{
  padding: 0.5%!important;
  background-color: rgb(183, 219, 248)!important;
}

.b-navbar{
  background-color: rgb(183, 219, 248)!important;
}
</style>
