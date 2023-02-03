import Api from '@/services/Api'

export default {
    //Закрепить препода за дисциплиной
    teacherPin (data = {user_id, group_subj_id}){
        return Api().post('/teacher/assign', data)
    },
    //Открепить препода от дисциплины
    teacherRemove (data = {user_id, group_subj_id}){
        return Api().post('/teacher/remove', data)
    },
    //Список дисциплин препода
    teacherSubject (data = {user_id}){
        return Api().post('/teacher/subject', data)
    },
    //Какой кафедрой заведует
    whoseHead (data = {user_id}){
        return Api().post('/whose_head', data)
    },
    //Назначить главой кафедры
    makeHead (data = {user_id, department_id}){
        return Api().post('/head/make', data)
    },
}