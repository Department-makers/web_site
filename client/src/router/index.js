import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import HomeView from '@/views/HomeView'
import ProfileView from '@/views/ProfileView'
import GroupsView from '@/views/GroupsView'
import SubjectsView from '@/views/SubjectsView'
import UserRequestsView from '@/views/UserRequestsView'

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: 'Кафедра' } 
  },
  {
    path: "/me",
    name: "profile",
    component: ProfileView,
    meta: { title: 'Профиль' }
  },
  {
    path: "/subjects",
    name: "subjects",
    component: SubjectsView,
    meta: { title: 'Дисциплины' }
  },
  {
    path: "/groups",
    name: "groups",
    component: GroupsView,
    meta: { title: 'Группы' }
  },
  {
    path: "/usersrequests",
    name: "usersrequests",
    component: UserRequestsView,
    meta: { title: 'Заявки' }
  },
]

const router = new Router({
  routes
});

export default router