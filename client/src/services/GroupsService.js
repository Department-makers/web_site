import Api from '@/services/Api'

export default {
  index (group) {
    return Api().get('groups', {
      params: group
    })
  },
  getUserGroup(userID){
    return Api().get(`groups/${userID}`)
  },
  post (group) {
    return Api().post('groups', group)
  },
  delete (groupId) {
    return Api().delete(`groups/${groupID}`)
  }
}