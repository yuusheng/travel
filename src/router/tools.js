// 防抖
export const debounce = (fn, timeout) => {
  let timer = null
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(arg)
    }, timeout)
  }
}

// 节流
export const throttle = (fn, timeout) => {
  let timer = null
  return function (...arg) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, timeout)
  }
}
