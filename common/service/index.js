import { merge } from '@common/utils/dataUtils'
import axios from 'axios'
// import qs from 'qs'
// 文档地址：http://www.axios-js.com/

export default class ServiceBase {
  constructor() {
    this.basicConfig = { timeout: 60000 }
    this.service = axios.create()
    this.service.interceptors.request.use(this.requestInterceptors.bind(this))
    this.service.interceptors.response.use(this.responseInterceptors.bind(this))
  }

  basicConfigGet() {
    return this.basicConfig
  }

  basicConfigSet(config) {
    this.basicConfig = merge(true, this.basicConfig, config)
    return this.basicConfig
  }

  // eslint-disable-next-line class-methods-use-this
  requestInterceptors(requestConfig) {
    return requestConfig
  }

  // eslint-disable-next-line class-methods-use-this
  responseInterceptors(response) {
    return response
  }

  get(url, config) {
    config = merge(true, config, { url, method: 'get' })
    return this.request(config)
  }

  post(url, config) {
    config = merge(true, config, { url, method: 'post' })
    return this.request(config)
  }

  put(url, config) {
    config = merge(true, config, { url, method: 'put' })
    return this.request(config)
  }

  delete(url, config) {
    config = merge(true, config, { url, method: 'delete' })
    return this.request(config)
  }

  request(config) {
    const fianlConfig = merge(true, this.basicConfig, config)
    return this.service.request(fianlConfig)
  }
}
