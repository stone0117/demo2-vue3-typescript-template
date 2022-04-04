import CPre   from './c-pre/index'
import CzPage from './cz-page/index'
import {App}  from 'vue'

const install = (Vue: App) => {
  Vue.component('CPre', CPre)
  Vue.component('CzPage', CzPage)
}

const components = {install}
export default components



