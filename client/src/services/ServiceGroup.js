import Api from '@/services/Api'

export default {
    //Получить всееееее группы
    groupList (data = {}){
        return Api().post('/group/list', data)
    },
    //Изменить группу студента
    setGroup (data = {user_id, group_id}){
        return Api().post('/group/change', data)
    },
    //Получить айди группы юзера
    getGroup (data = {user_id}){
        return Api().post('/group/get', data)
    },
    //Создать группу
    createGroup (data = {department_id, full_name, short_name, train_area_code, form_year, course}){
        return Api().post('/group/create', data)
    },
    //Удалить группу
    removeGroup (data = {group_id}){
        return Api().post('/group/remove', data)
    },
    //Инфа о группе
    groupInfo (data = {group_id}){
        return Api().post('/group/info', data)
    },
    //Список студентов группы
    groupStudents (data = {group_id}){
        return Api().post('/group/students', data)
    },
    //Список дисциплин группы
    groupSubject (data = {group_id}){
        return Api().post('/group/subject', data)
    },
    //Может ли чел видеть внутри группы
    canSeeGroup (data = {user_id, group_id}){
        return Api().post('/group/can_see', data)
    },
    //Привязать дисциплину к группе
    addGroupSubject (data = {subject_id, group_id}){
        return Api().post('/group/subject/add', data)
    },
    //Отвязать дисциплину от группы
    removeGroupSubject (data = {group_subj_id}){
        return Api().post('/group/subject/remove', data)
    },
}