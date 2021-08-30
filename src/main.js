import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import "./styles/theme/index.css";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/ru-RU";

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
