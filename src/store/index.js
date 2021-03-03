import Vue from 'vue'
import Vuex from 'vuex'
import stateOutside from "@/store/stateOutside";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editor: {
      toolbar: 1,
      outline: false,
      updated: true
    },
    ...stateOutside
  },

  mutations: {
    resetProps(state, target) {
      const props = state[target].props
      const slots = state[target].slots || []
      const propList = Object.keys( props )
      const slotList = Object.keys( slots )

      propList.forEach( key =>
        props[key].val = props[key].def )
      slotList.forEach( key => slots[key].val = false )
    }
  },

  actions: {
    forceRender(context) {
      const it = context.state.editor
      it.updated = false
      setTimeout(() => it.updated = true)
    }
  },

  modules: {
  }
})
