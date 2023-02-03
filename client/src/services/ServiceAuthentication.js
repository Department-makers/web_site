import Api from '@/services/Api'

export default {
    //Получить токены с помощью авторизации
    getJwtByLogin (data = {email, password}){
        return Api().post('/jwt/get_by_login', data)
    },
    //Проверка JWT
    checkJwt (data = {access_token, refresh_token}){
        return Api().post('/jwt/check', data)
    },
}