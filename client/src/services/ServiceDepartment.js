import Api from '@/services/Api'

export default {
    //Список всех кафедр
    departamentsList (data ={}){
        return Api().post('/dep/list', data)
    },
    //Создать кафедру
    createDepartament (data = {head_id, full_name, short_name}){
        return Api().post('/dep/create', data)
    },
    //Удалить кафедру
    removeDepartament (data = {department_id}){
        return Api().post('/dep/remove', data)
    },
    //Инфа о кафедре
    departamentInfo (data = {department_id}){
        return Api().post('/dep/info', data)
    },
    //Переименовать кафедру
    renameDepartament (data = {department_id, full_name, short_name}){
        return Api().post('/dep/rename', data)
    },
    //Список студентов ожидающих подтверждения
    getDepartamentVerifyList (data = {department_id}){
        return Api().post('/dep/get_verifi_list', data)
    },
    //Может ли видеть данную кафедру
    canSeeDepartament (data = {user_id, department_id}){
        return Api().post('/dep/can_see', data)
    },
    //Список групп кафедры
    getDepartamentGroup (data = {department_id}){
        return Api().post('/dep/get_group', data)
    },
    //Список дисциплин кафедры
    getDepartamentSubject (data = {department_id}){
        return Api().post('/dep/get_subject', data)
    },
}