import Api from '@/services/Api'

export default {
    //Создать раздел
    createTopic (data = {subject_id, name:""}){
        return Api().post('/topic/create', data)
    },
    //Удалить раздел
    removeTopic (data = {topic_id}){
        return Api().post('/topic/remove', data)
    },
    //Переименовать раздел
    renameTopic (data = {topic_id, name:""}){
        return Api().post('/topic/rename', data)
    },
    //Может ли чел видеть раздел
    canSeeTopic (data = {user_id, topic_id}){
        return Api().post('/topic/can_see', data)
    },
    //Получить разделы предмета
    getTopicsSubject (data = {subject_id}){
        return Api().post('/topic/get_subject', data)
    },
}