export function initAnalysisData() {
  const t = window.performance.timing
  let analysisTimes = {}
  // 重定向时间
  analysisTimes.redirectTime = t.redirectEnd - t.redirectStart

  // dns查询耗时
  analysisTimes.dnsTime = t.domainLookupEnd - t.domainLookupStart

  // DNS 缓存时间
  analysisTimes.appcacheTime = t.domainLookupStart - t.fetchStart

  // // 卸载页面的时间
  // analysisTimes.unloadTime = t.unloadEventEnd - t.unloadEventStart

  // tcp连接耗时
  analysisTimes.tcpTime = t.connectEnd - t.connectStart

  // request请求耗时
  analysisTimes.contentLoad = t.responseEnd - t.responseStart
  analysisTimes.contentTTFB = t.responseStart - t.requestStart

  // 解析dom树耗时
  analysisTimes.analysisTime = t.domComplete - t.domInteractive

  // 白屏时间
  analysisTimes.domReadyTime = t.domContentLoadedEventEnd - t.fetchStart
  return analysisTimes
}
