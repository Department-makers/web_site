import Api from '@/services/Api'

export default {
  index (message) {
    return Api().get('messages', {
      params: message
    })
  },
  getMessagesInTopic(userID, themeID){
    return Api().get(`messages/${userID}/${themeID}`)
  },
  post (message) {
    return Api().post('messages', message)
  },
  delete (messageID) {
    return Api().delete(`messages/${messageID}`)
  }
}