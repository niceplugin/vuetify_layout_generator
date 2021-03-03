import Vue from 'vue'
import VueRouter from 'vue-router'
import EditorHome from "@/components/EditorHome"
import EditorView from "@/components/EditorView"
import stateOutside from "@/store/stateOutside"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EditorHome',
    component: EditorHome
  },
  {
    path: '/editor/:path',
    name: 'EditorView',
    component: EditorView
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  const editorList = [
    ...Object.keys(stateOutside)
  ]

  // 경로가 /editor/ 로 시작할 경우
  if (to.path.match(/^\/editor\//)) {
    const path = to.params.path
    const i = editorList.indexOf(path)
    if (i === -1) { // 찾는 경로가 없을 경우
      return next({ path: '/', params: { path: ''} })
    }
  }
  return next()
})

export default router
