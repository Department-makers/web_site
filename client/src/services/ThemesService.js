import Api from '@/services/Api'

export default {
  index (group) {
    return Api().get('themes', {
      params: group
    })
  },
  getSubjectThemes(subjectID){
    return Api().get(`themes/${subjectID}`)
  },
  post (theme) {
    return Api().post('themes', theme)
  },
  delete (themeID) {
    return Api().delete(`themes/${themeID}`)
  }
}