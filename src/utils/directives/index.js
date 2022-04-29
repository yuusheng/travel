import focus from './focus'
import lazy from './lazy'
import loading from './loading'

const directives = [focus, lazy, loading]

export default {
  install(app, options) {
    directives.forEach((direct) => app.directive(direct.name, direct.option))
  },
}
