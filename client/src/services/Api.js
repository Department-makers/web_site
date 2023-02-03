import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/api`,
    headers: {
      auth: `Bearer ${store.state.access_token}`
    }
  })
}