import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import ElementAddress from 'element-address';
import 'element-address/lib/index.css';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(ElementAddress);
app.mount('#app')
// createApp(App).mount('#app')
