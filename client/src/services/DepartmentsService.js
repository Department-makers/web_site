import Api from '@/services/Api'

export default {
  index (departments) {
    return Api().get('departments', {
      params: departments
    })
  },
  post (department) {
    return Api().post('departments', department)
  },
  delete (departmentId) {
    return Api().delete(`departments/${departmentID}`)
  }
}