import ServiceBase from '@common/service'
import { getQueryString } from '@common/utils/common'

const ORIGINS_MAP = {
  dev: '1',
  test: '2',
  prod: '3',
}

class Service extends ServiceBase {
  constructor() {
    super()
    this.basicConfigSet({
      // 访问地址添加path-query参数: ?api=test 来访问test测试环境
      baseURL: ORIGINS_MAP[getQueryString('api') || (process.env.CODE_ENV === 'production' ? 'prod' : 'test')],
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
  }

  // 请求拦截器
  // eslint-disable-next-line class-methods-use-this
  requestInterceptors(requestConfig) {
    // TODO 请求拦截器中添加token
    requestConfig.headers['X-TOKEN'] = 'token'
    return requestConfig
  }

  // 返回拦截器
  // eslint-disable-next-line class-methods-use-this
  responseInterceptors(response) {
    const { data } = response
    if (data.code === 0) {
      return data
    }
    return Promise.reject(data)
  }
}

const service = new Service()
export default service
