import Api from '@/services/Api'

export default {
    //Создать дисциплину
    createSubject (data = {department_id, name:""}){
        return Api().post('/subject/create', data)
    },
    //Удалить дисциплину
    removeSubject (data = {subject_id}){
        return Api().post('/subject/remove', data)
    },
    //Переименовать дисциплину
    renameSubject (data = {subject_id, name:""}){
        return Api().post('/subject/rename', data)
    },
    //Инфа о дисциплине
    subjectInfo (data = {subject_id}){
        return Api().post('/subject/info', data)
    },
    //Может ли юзер видеть дисциплину
    canSeeSubject (data = {user_id, group_subj_id}){
        return Api().post('/subject/can_see', data)
    },
}