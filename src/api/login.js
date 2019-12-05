import { post } from './api'

export default {
  loginAPI(params) {
    return post('/r/jd', params)
  }
}
