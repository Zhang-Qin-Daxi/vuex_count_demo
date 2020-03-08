import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    show_getter(state) {
      return '当前最新数据是【' + state.count + '】'
    }

  },
  // 只有 mutations 中定义的函数，才有权利修改 state 中的数据
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    async_add(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    async_addN(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000);
    },
    async_sub(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    async_subN(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000);
    }
  },
  modules: {
  }
})
