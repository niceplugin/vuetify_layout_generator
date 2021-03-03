<template>
  <v-card
      id="editor"
      :class="overflow"
      :style="style"
  >
    <!--  에디터 시스템 바  -->
    <v-system-bar
        color="blue"
    >
      <v-icon
          @click.stop="drawer = !drawer"
      >
        mdi-menu
      </v-icon>

      Editor

      <v-spacer/>

      <v-icon
          @click.stop="overlay.resize = !overlay.resize"
      >
        mdi-arrow-expand-all
      </v-icon>

      <span class="px-1">|</span>

      <v-icon
          @click.stop="overlay.move = !overlay.move"
      >
        mdi-arrow-all
      </v-icon>
    </v-system-bar>

    <!--  에디터 툴 바  -->
    <v-toolbar
        v-if="toolbar"
        color="blue lighten-4"
        flat
        dense
    >
      {{ title }}
      <v-spacer/>
      <v-tooltip
          v-for="(item, i) in toolbarBtn"
          :key="i"
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              @click.stop="clickToolbarBtn(i)"
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ item.tooltip }}</span>
      </v-tooltip>
    </v-toolbar>

    <!--  에디터 네비게이션 바  -->
    <v-navigation-drawer
        v-model="drawer"
        mobile-breakpoint="9999"
        absolute
        width="auto"
    >
      <template slot="prepend">
        <v-list-item-group>
          <v-list-item
              href="https://vuetifyjs.com/en/introduction/why-vuetify/"
              target="_blank"
              color="white"
              dense
              link
          >
            <v-list-item-icon class="mr-3">
              <v-icon color="blue">mdi-vuetify</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Vuetify</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </template>

      <v-divider/>

      <v-list
          dense
          nav
      >
        <template v-for="(item, i) in navList">
          <custom-nav-list-group
              v-if="item.child"
              :key="item.title + i"
              :item="item"
          ></custom-nav-list-group>

          <custom-nav-list-item
              v-else
              :key="item.title + i"
              :item="item"
          ></custom-nav-list-item>
        </template>
      </v-list>

    </v-navigation-drawer>

    <router-view/>

    <!--  위치조정 오버레이  -->
    <div
        class="overlay-box-text cursor-move"
        @mousedown.stop="mdMove"
        @mousemove.stop="mmMove"
        @mouseup.stop="muMove"
        @mouseleave.stop="muMove"
    >
      <v-overlay
          :value="overlay.move"
      >
        Drag with the mouse to move.
      </v-overlay>
    </div>

    <!--  위치조정 오버레이  -->
    <div
        class="overlay-box-text"
        @mouseup.stop="muResize"
        @mousemove.stop="mmResize"
    >
      <v-overlay
          :value="overlay.resize"
      >
        Click to finish resizing.
      </v-overlay>

      <!--  리사이징 컨트롤러  -->
      <div
          class="overlay-box-sizing-window"
          v-if="overlay.resize"
      >
        <div
            class="overlay-box-sizing-overlay"
        ></div>

        <!--  좌상 | 상 | 우상  -->
        <v-row
            class="overlay-box-sizing-row-top"
            justify="space-between"
            no-gutters
        >
          <v-col
              class="cursor-size-nwse"
              cols="auto"
              @mousedown.stop="mdResize($event, -1, -1)"></v-col>
          <v-col
              class="cursor-size-ns"
              @mousedown.stop="mdResize($event, 0, -1)"></v-col>
          <v-col
              class="cursor-size-nesw"
              cols="auto"
              @mousedown.stop="mdResize($event, 1, -1)"></v-col>
        </v-row>

        <!--  좌 | 우  -->
        <v-row
            class="overlay-box-sizing-row-center"
            justify="space-between"
            no-gutters
        >
          <v-col
              class="cursor-size-ew"
              cols="auto"
              @mousedown.stop="mdResize($event, -1, 0)"></v-col>
          <v-col
              class="cursor-size-ew"
              cols="auto"
              @mousedown.stop="mdResize($event, 1, 0)"></v-col>
        </v-row>

        <!--  좌하 | 하 | 우하  -->
        <v-row
            class="overlay-box-sizing-row-bottom"
            justify="space-between"
            no-gutters
        >
          <v-col
              class="cursor-size-nesw"
              cols="auto"
              @mousedown.stop="mdResize($event, -1, 1)"></v-col>
          <v-col
              class="cursor-size-ns"
              @mousedown.stop="mdResize($event, 0, 1)"></v-col>
          <v-col
              class="cursor-size-nwse"
              cols="auto"
              @mousedown.stop="mdResize($event, 1, 1)"></v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
import CustomNavListGroup from "@/components/CustomNavListGroup"
import CustomNavListItem from "@/components/CustomNavListItem"
import stateOutside from "@/store/stateOutside"

// 대문자로 시작하는 제목 텍스트 만들기
function toUppercaseTitle(str) {
  return str.replace(/[A-Z]/g, ' $&')
      .replace( /^[a-z]/, str=>str.toUpperCase() )
}
// 애디터 네비게이션 하위 목록 만들기
function getChild(child, list, root = 'editor') {
  list.forEach((val) => {
    const obj = {
      title: toUppercaseTitle(val),
      to: `/${root}/${val}`
    }
    child.push(obj)
  })
}

export default {
  name: 'Editor',

  components: {
    CustomNavListGroup,
    CustomNavListItem
  },

  data: () => ({
    drawer: false,
    style: {
      transform: 'translate(260px, 200px)',
      width: '400px',
      height: '400px'
    },

    toolbarBtn: [
      {
        icon: 'mdi-view-compact-outline',
        tooltip: 'Show outline'
      },
      {
        icon: 'mdi-checkbook',
        tooltip: 'Edit props'
      },
      {
        icon: 'mdi-xml',
        tooltip: 'View source'
      },
      {
        icon: 'mdi-cached',
        tooltip: 'Reset props'
      }
    ],

    // 애디터 리사이즈, 이동 컨트롤 참조 값
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      minWidth: 180,
      minHeight: 180,
      move: false,
      moving: false,
      moveStartX: 0,
      moveStartY: 0,
      resize: false,
      resizing: false,
      resizeX: 0,
      resizeY: 0
    },
  }),

  computed: {
    title() {
      return toUppercaseTitle(this.$route.params.path)
    },
    overflow() {
      // 리사이즈 중에는 화면 전체에 마우스 무브 이벤트가 동작해야 하므로
      // 시각적으로는 보이지 않지만
      // 내부적으로는 화면 전체를 덮는 엘리먼트를 활성화 하기 위함
      return this.overlay.resize ? 'overflow-vi' : ''
    },
    toolbar() {
      return this.$route.name === 'EditorView'
    },
    navList() {
      const pathHome = {
        title: 'Home',
        icon: 'mdi-home',
        to: '/',
      }
      const pathOutside = {
        title: 'Outside',
        icon: 'mdi-chart-tree',
        child: []
      }

      getChild(pathOutside.child, Object.keys(stateOutside))

      return [
          pathHome,
          pathOutside
      ]
    }
  },

  methods: {
    clickToolbarBtn(i) {
      if (i === 0) {
        this.$store.state.editor.outline =
            !this.$store.state.editor.outline
      } else if (i < 3) {
        this.$store.state.editor.toolbar = i
      } else {
        const target = this.$route.params.path
        this.$store.commit('resetProps', target)
        // this.$store.dispatch('forceRender')
        const it = this.$store.state.editor
        it.updated = false
        setTimeout(() => it.updated = true)
      }
    },

    mdMove(event) {
      const position = this.$el.getBoundingClientRect()

      this.overlay.moving = true
      this.overlay.top = position.top
      this.overlay.left = position.left
      this.overlay.width = position.width
      this.overlay.height = position.height
      this.overlay.moveStartX = event.x
      this.overlay.moveStartY = event.y
    },
    mmMove(event) {
      // 클릭상태에서 무빙중이 아닐 경우
      if (!this.overlay.moving) { return }

      let y = this.overlay.top + (event.y - this.overlay.moveStartY)
      let x = this.overlay.left + (event.x - this.overlay.moveStartX)

      const xMax = window.innerWidth - this.overlay.width
      const yMax = window.innerHeight - this.overlay.height
      // 창이 화면 밖으로 이동될 경우 최소 또는 최대 기본값으로 적용
      x = x < 0 ? 0 : x > xMax ? xMax : x
      y = y < 0 ? 0 : y > yMax ? yMax : y

      this.style.transform = `translate(${x}px, ${y}px)`
    },
    muMove() {
      this.overlay.move = false
      this.overlay.moving = false
    },

    mdResize(event, ...direction) {
      const position = this.$el.getBoundingClientRect()

      this.overlay.top = position.top
      this.overlay.left = position.left
      this.overlay.right = position.right
      this.overlay.bottom = position.bottom
      this.overlay.width = position.width
      this.overlay.height = position.height
      this.overlay.resizing = true
      this.overlay.resizeX = direction[0]
      this.overlay.resizeY = direction[1]
    },
    mmResize(event) {
      // 리사이징이 상태가 아닐경우 리턴
      if (!this.overlay.resizing) { return }

      const resizeX = this.overlay.resizeX
      const resizeY = this.overlay.resizeY
      const minWidth = this.overlay.minWidth
      const minHeight = this.overlay.minHeight
      let width = this.overlay.width
      let height = this.overlay.height
      let x = this.overlay.left + 'px'
      let y = this.overlay.top + 'px'

      if (resizeX === 1) {
        width = event.x - this.overlay.left
      } else if (resizeX === -1) {
        width = this.overlay.right - event.x
        x = this.overlay.right - width + 'px'
      }

      if (resizeY === 1) {
        height = event.y - this.overlay.top
      } else if (resizeY === -1) {
        height = this.overlay.bottom - event.y
        y = this.overlay.bottom - height + 'px'
      }

      if (width > minWidth) {
        this.style.width = width + 'px'
      } else if (resizeX === -1) {
        x = this.overlay.right - minWidth + 'px'
      }
      if (height > minHeight) {
        this.style.height = height + 'px'
      } else if (resizeY === -1) {
        y = this.overlay.bottom - minHeight + 'px'
      }

      if (resizeX === -1 || resizeY === -1) {
        this.style.transform = `translate(${x}, ${y})`
      }
    },
    muResize() {
      if (this.overlay.resizing) {
        this.overlay.resizing = false
      } else {
        this.overlay.resize = false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#editor.overflow-vi
  overflow: visible
  .container
    overflow: hidden
#editor
  position: fixed
  height: 100%
  z-index: 999
  overflow: hidden
  .container
    height: calc(100% - 24px)
    overflow: auto
  .container.need-toolbar
    height: calc(100% - 72px)
  .cursor-move
    cursor: all-scroll
  .cursor-size-ew
    cursor: ew-resize
  .cursor-size-ns
    cursor: ns-resize
  .cursor-size-nesw
    cursor: nesw-resize
  .cursor-size-nwse
    cursor: nwse-resize
  .overlay-box-text
    -moz-user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    user-select: none
  .overlay-box-sizing-window
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .col
      min-width: 24px
      min-height: 24px
      z-index: 1000
  .overlay-box-sizing-row-center
    position: absolute
    top: 24px
    left: 0
    right: 0
    bottom: 24px
    margin: 0
  .overlay-box-sizing-row-top
    position: absolute
    top: 0
    left: 0
    right: 0
  .overlay-box-sizing-row-bottom
    position: absolute
    left: 0
    right: 0
    bottom: 0
  .overlay-box-sizing-overlay
    position: fixed
    top: -100vh
    left: -100vh
    right: -100vh
    bottom: -100vh
</style>
