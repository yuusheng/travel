const directives = [
  {
    name: 'focus',
    option: {
      mounted(el) {
        el.focus()
      },
    },
  },
  {
    name: 'lazy',
    option: {
      mounted(el, binding) {
        // 创建一个观察对象，来观察当前使用指令的元素是否进入可视区
        const observe = new IntersectionObserver(
          ([{ isIntersecting }]) => {
            // * 两个回调参数 entries被观察的元素信息对象的数组 [{元素信息},{}]，信息中isIntersecting判断进入或离开 true为进入 , observer就是观察实例
            if (isIntersecting) {
              // 通过isIntersecting来判断是否进入可视区, 进入可视区之后停止观察
              observe.unobserve(el)
              // 处理图片加载失败的情况, 如果图片加载失败就显示默认图片
              el.onerror = () => {
                el.src = '@/assets/img/Lvshu.png'
              }
              // 把指令的值设置给el元素的src属性 binding.value就是指令传递的值
              el.src = binding.value
            }
          },
          {
            threshold: 0,
          }
        )
        observe.observe(el)
      },
    },
  },
]

export default {
  install(app, options) {
    directives.forEach((direct) => app.directive(direct.name, direct.option))
  },
}
