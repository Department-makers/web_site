import Api from '@/services/Api'

export default {
    //Подтвердить заявку
    verify (data = {user_id}){
        return Api().post('/verify', data)
    },
    //Отклонить заявку
    reject (data = {user_id}){
        return Api().post('/reject', data)
    },
    //Подтверждён ли
    is_verifyed (data = {user_id}){
        return Api().post('/is_verifyed', data)
    },
}