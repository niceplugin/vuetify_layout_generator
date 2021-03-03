<template>
  <v-sheet>
    <v-tooltip
        bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="mt-6"
            absolute
            fab
            small
            elevation="3"
            top
            right
            v-bind="attrs"
            v-on="on"
            @focus="resetTooltipText"
            @blur="resetTooltipText"
            @mouseover="resetTooltipText"
            @mouseout="resetTooltipText"
            @click="doCopy"
        >
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <pre>{{ code }}</pre>
  </v-sheet>
</template>

<script>
const slotText = {
  prepend: `  <template v-slot:prepend>
    Prepend
  </template>`,
  append: `  <template v-slot:append>
    Append
  </template>`,
  imgND: `  <template v-slot:img="props">
    <v-img v-bind="props"/>
  </template>`,
  imgB: `  <template v-slot:img="{ props }">
    <v-img v-bind="props"/>
  </template>`,
  extension: `  <template v-slot:extension>
    Extension Slot
  </template>`,
}
const etcText = {
  'v-app-bar-nav-icon': '<v-app-bar-nav-icon/>',
  'v-toolbar-title': '<v-toolbar-title>TITLE</v-toolbar-title>'
}

// 대문자로 시작하는 제목 텍스트 만들기
function toComponentName(str, end = false) {
  const prepend = `<${end ? '/' : ''}v`
  const name = str.replace(/^[a-z]/, str => '-' + str.toLowerCase() )
      .replace(/[A-Z]/g, str => '-' + str.toLowerCase())
  return `${prepend}${name}${end ? '>' : ''}`
}
// 대문자로 시작하는 제목 텍스트 만들기
function toUppercaseTitle(str) {
  return str.replace(/[A-Z]/g, ' $&')
      .replace( /^[a-z]/, str=>str.toUpperCase() )
}

export default {
  name: "EditorViewCode",

  computed: {
    code() {
      const compName = this.$route.params.path
      const compObj = this.$store.state[compName]
      const compProps = compObj.props || {}
      const compSlots = compObj.slots || {}
      const compEtc = compObj.etc || {}
      const endTag = toComponentName(compName, true)
      let centerTag = ''
      let startTag = toComponentName(compName)
      let list

      // 컴포넌트 prop 텍스트 생성
      list = Object.keys(compProps)
      list.forEach((prop) => {
        let str = ''
        if (compProps[prop].val !== compProps[prop].def) {
          str += `\n    ${prop}`
          if (compProps[prop].type === 'string') {
            str += `="${compProps[prop].val}"`
          }
          startTag += str
        }
      })
      // 컴포넌트 테그를 닫는다
      startTag += startTag === toComponentName(compName) ? '>' : '\n  >'

      // 컴포넌트 slot 텍스트 생성
      list = Object.keys(compSlots)
      list.forEach((slot) => {
        if (compSlots[slot].val) {
          if (slot === 'img') {
            slot += compName === 'navigationDrawer' ? 'ND' : 'B'
          }
          centerTag += `\n${slotText[slot]}`
        }
      })

      // 컴포넌트 etc 텍스트 생성
      list = Object.keys(compEtc)
      list.forEach((etc) => {
        if (compEtc[etc].val) {
          const title = toUppercaseTitle(compName)
          const text = etcText[etc].replace('TITLE', title)
          centerTag += `\n  ${text}`
        }
      })

      // 컴포넌트 닫는 테그 추가
      centerTag += centerTag ? '\n' : ''
      startTag += centerTag + endTag

      return startTag
    }
  },

  data: () => ({
    tooltip: 'Code copy'
  }),

  methods: {
    doCopy() {
      const it = this
      navigator.clipboard.writeText( this.code )
          .then( () => it.tooltip = 'Copied' )
    },
    resetTooltipText() {
      this.tooltip = 'Code copy'
    }
  }
}
</script>

<style lang="sass" scoped>
.v-sheet
  position: relative
</style>