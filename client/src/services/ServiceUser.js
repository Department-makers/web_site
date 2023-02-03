import Api from '@/services/Api'

export default {
    //Создать
    create (data = {first_name, second_name, role_id, email, password, photo_path:{}, is_verified}){
        return Api().post('/user/create', data)
    },
    //Удалить
    remove (data = {user_id}) {
        return Api().post('/user/remove', data)
    },
    //Изменить имя и фамилию
    update (data={user_id, first_name, second_name}) {
        return Api().post('/user/update', data)
    },
    //Изменить фото
    update_photo (data={user_id, photo:{}}) {
        return Api().post('/user/update_photo', data)
    },
    //Изменить мыло
    update_email (data = {user_id, password}) {
        return Api().post('/user/update_email', data)
    },
    //Изменить пароль
    update_password (data = {user_id, email}) {
        return Api().post('/user/update_password', data)
    },
    //Изменить роль
    set_role (data={user_id, role_id, group_id}) {
        return Api().post('/user/set_role', data)
    },
    //Получить инфу
    info (data = {user_id}) {
        return Api().post('/user/info', data)
    },
}