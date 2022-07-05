// 设置localStorage
export const setStorage = (token: string) => {
  localStorage.setItem('Authorization', token)
  console.log('设置localStorage成功')
}

// 获取localStorage
export const getStorage = () => {
  return localStorage.getItem('Authorization')
    ? localStorage.getItem('Authorization')
    : null
}
