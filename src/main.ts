import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App         from './App.vue'
import router      from './router'
import store       from './store'
import components  from './components/index'
import './assets/reset.css'
import './style/index.scss'
import './styles/index.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus, {size: 'small', zIndex: 3000})
app.use(components)
app.mount('#app')
