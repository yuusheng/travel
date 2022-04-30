import { createApp } from 'vue'
import Loading from './Loading.vue'

const relativeCls = 'relative'

export default {
  name: 'load',
  option: {
    mounted(el, binding) {
      const app = createApp(Loading)
      const instance = app.mount(document.createElement('div'))
      el.instance = instance
      const title = binding.arg

      // if (typeof title === 'undefined') {
      //   app.setTitle(title)
      // }

      if (
        typeof binding.value === 'object' &&
        binding.value !== null &&
        binding.value.text
      ) {
        instance.setTitle(binding.value.text)
      }
      if (binding.value) {
        if (typeof binding.value === 'boolean') append(el)
        if (typeof binding.value === 'object' && binding.value !== null) {
          if (binding.value.value) append(el)
        }
      }
    },
    updated(el, binding) {
      // const title = binding.arg
      // if (typeof title !== undefined) {
      //   el.instance.setTitle(title)
      // }
      if (binding.value !== binding.oldValue) {
        if (typeof binding.value === 'boolean') {
          binding.value ? append(el) : remove(el)
        }
        if (typeof binding.value === 'object') {
          binding.value.value ? append(el) : remove(el)
        }
      }
    },
  },
}

function append(el) {
  const style = getComputedStyle(el)
  if (!['absolute', 'fixed', 'relative'].includes(style.position)) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

function removeClass(el, className) {
  el.classList.remove(className)
}
