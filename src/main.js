import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import MySVGComponent from './components/MySVGComponent'

const app = createApp(App).use(router);

app.component('my-svg-component', MySVGComponent)

app.mount('#app')
