import Api from '@/services/Api'

export default {
    //Создать сообщение
    createMessage (data = {user_id, topic_id, text, sent, file:{}, private:0}){
        return Api().post('/message/create', data)
    },
    //Удалить сообщение
    removeMessage (data = {message_id}){
        return Api().post('/message/remove', data)
    },
    //Изменить текст сообщения
    editMessage (data = {message_id, text, sent}){
        return Api().post('/message/edit', data)
    },
    //Изменить файл сообщения
    editMessageFile (data = {message_id, file:{}}){
        return Api().post('/message/edit_file', data)
    },
    //Инфа о сообщении
    messageInfo (data = {message_id}){
        return Api().post('/message/info', data)
    },
    //Получить сообщения доступные челу в разделе
    getMessagePerson (data = {user_id, topic_id}){
        return Api().post('/message/get_person', data)
    },
    //Поделить сообщением
    shareMessage (data = {user_id, message_id}){
        return Api().post('/message/share', data)
    },
}