// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.use(mavonEditor);
Vue.use(ElementUI);
Vue.prototype.axios = axios; 
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
  		myblog:''
  },
  actions: {

  },
  mutations: {
  		setblog(state,content){
  			state.myblog=content;
  		}
  },
  getters: {

  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
