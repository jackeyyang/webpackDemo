/*
* @Author: jacky.yang
* @Date:   2017-09-06 16:28:36
* @Last Modified by:   jacky.yang
* @Last Modified time: 2017-09-06 17:23:38
*/

'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
	language: 'zh-CN'
};

export default new Vuex.Store({
	state,
	mutations
});