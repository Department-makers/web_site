import Api from '@/services/Api'

export default {
  index (subject) {
    return Api().get('subjects', {
      params: subject
    })
  },
  getGroupSubjects(groupID){
    return Api().get(`subjects/${groupID}`)
  },
  post (subject) {
    return Api().post('subjects', subject)
  },
  delete (subjectID) {
    return Api().delete(`subjects/${subjectID}`)
  }
}