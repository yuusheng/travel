const directives = [
  {
    name: 'focus',
    option: {
      mounted(el) {
        el.focus()
      },
    },
  },
]

export default {
  install(app, options) {
    directives.forEach((direct) => app.directive(direct.name, direct.option))
  },
}
