// functions for data-type
// 数据判断
export function isDef(v) {
  return v !== undefined && v !== null
}

export function isUndef(v) {
  return v === undefined || v === null
}

export function isPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol' || typeof v === 'boolean'
}

export function isObject(v) {
  return v !== null && typeof v === 'object'
}

export function isNumber(v) {
  return Array.isArray(v) || _toString.call(v) === '[object Array]'
}

const _toString = Object.prototype.toString

export function isPlainObject(v) {
  return _toString.call(v) === '[object Object]'
}

export function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]'
}

export function isFunction(v) {
  return _toString.call(v) === '[object Function]'
}

export function isArray(v) {
  return Array.isArray(v) || _toString.call(v) === '[object Array]'
}

export function isSymbol(v) {
  return _toString.call(v) === '[object Symbol]'
}

export function isMap(v) {
  return _toString.call(v) === '[object Map]'
}

export function isSet(v) {
  return _toString.call(v) === '[object Set]'
}

// 数据操作
/**
 * 合并对象
 * @param {Boolean} deep 是否深复制再合并
 * example { info: { height: 160, age: 16 } }, { info: { weight: 60, age: 18 } }
 * true    { info: { height: 160, weight: 60, age: 18 } }
 * false   { info: { weight: 60, age: 18 }
 * @param {Object} target 目标对象
 * @param  {...Object} rest 剩余参数
 */
export function merge(deep = false, target = {}, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    // cache value
    let current
    let targetValue
    let operateValue

    current = rest[i]
    Object.keys(current).forEach((key) => {
      targetValue = target[key] // target value
      operateValue = current[key] // operate value

      // prevent circular reference
      if (target !== operateValue) {
        // 浅拷贝 || 基础类型 || 数组，直接赋值
        if (!deep || isPrimitive(operateValue) || isArray(operateValue)) {
          target[key] = operateValue
        } else {
          target[key] = merge(deep, targetValue, operateValue)
        }
      }
    })
  }
  return target
}
