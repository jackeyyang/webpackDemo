import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Hello from '@/components/Hello.vue'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
    routes: [
	  	{
	      path: '/',
	      name: 'Hello',
	      component: Hello
	    }
    ]
})
