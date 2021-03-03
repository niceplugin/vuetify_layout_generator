<template>
  <v-list>
    <!--  컴포넌트 활성화 컨트롤  -->
    <v-list-item-content class="pt-0">
      <v-list-item-title>
        <v-switch
            class="ml-3 mt-1 mb-n3"
            v-model="enabled"
            label="사용"
            dense
        ></v-switch>
      </v-list-item-title>
    </v-list-item-content>

    <!--  컴포넌트 props 컨트롤  -->
    <v-list-group
        value="open"
        no-action
    >
      <template v-slot:activator>
        <v-list-item-title>Props</v-list-item-title>
      </template>

      <template
          v-for="(prop, key, idx) in props"
      >
        <v-divider
            inset
            :key="key + idx"
        ></v-divider>
        <v-list-item
            :key="key"
        >
          <v-list-item-content>
            <v-list-item-title>
              <!--  채크박스  -->
              <v-checkbox
                  v-if="prop.type === 'boolean'"
                  v-model="prop.val"
                  :label="key"
                  @change="forceRerender(key)"
                  dense
              ></v-checkbox>
              <!--  인풋 텍스트  -->
              <v-text-field
                  v-else-if="prop.type === 'string'"
                  v-model="prop.val"
                  :placeholder="prop.placeholder"
                  @change="forceRerender(key)"
              >
                <span slot="prepend" v-text="key"></span>
              </v-text-field>
              <!--  인풋 넘버  -->
              <v-slider
                  v-else-if="prop.type === 'number'"
                  class="align-end mt-7 mb-n2"
                  v-model="prop.val"
                  thumb-label="always"
                  :min="prop.range[0]"
                  :max="prop.range[1]"
                  :label="key"
              >
                <template v-slot:append>
                  <v-text-field
                      v-model="prop.val"
                      class="mt-0 pt-0"
                      type="number"
                      style="width: 48px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-list-item-title>
            <v-list-item-subtitle
                v-if="prop.des"
            >
              {{ prop.des }}
              <a v-if="!!prop.link" :href="prop.link" target="_blank">참고</a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list-group>

    <!--  컴포넌트 slots 컨트롤  -->
    <v-list-group
        v-if="slots"
        no-action
    >
      <template v-slot:activator>
        <v-list-item-title>Slots</v-list-item-title>
      </template>

      <template
          v-for="(obj, key, idx) in slots"
      >
        <v-divider
            inset
            :key="key + idx"
        ></v-divider>
        <v-list-item
            :key="key"
        >
          <v-list-item-content>
            <v-list-item-title>
              <!--  채크박스  -->
              <v-checkbox
                  v-model="obj.val"
                  :label="key"
                  dense
              ></v-checkbox>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list-group>

    <!--  컴포넌트 etc 컨트롤  -->
    <v-list-group
        v-if="etc"
        no-action
    >
      <template v-slot:activator>
        <v-list-item-title>Etc</v-list-item-title>
      </template>

      <template
          v-for="(obj, key, idx) in etc"
      >
        <v-divider
            inset
            :key="key + idx"
        ></v-divider>
        <v-list-item
            :key="key"
        >
          <v-list-item-content>
            <v-list-item-title>
              <!--  채크박스  -->
              <v-checkbox
                  v-model="obj.val"
                  :label="key"
                  dense
              ></v-checkbox>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "EditorViewForm",

  computed: {
    compName() {
      return this.$route.params.path
    },
    props() {
      return this.$store.state[this.compName].props
    },
    slots() {
      return this.$store.state[this.compName].slots
    },
    etc() {
      return this.$store.state[this.compName].etc
    },
    enabled: {
      get() {
        return this.$store.state[this.compName].enabled
      },
      set(val) {
        this.$store.state[this.compName].enabled = val
      }
    }
  },

  methods: {
    forceRerender(curKey) {
      // app 속성과 관련하여 컴포넌트에 최초 1회 계산된 css 속성이 적용되는
      // vuetify 내부 로직이 있음.
      // 따라서 props 를 정확하게 적용하려면 props.app 의 값을 변동시켜
      // 강제로 vuetify 가 다시 css 속성을 계산하도록 해야 함.
      // 다른 방법을 찾지 못함 ㅜ
      const inHere = typeof(this.props.app) === 'object'
      if (inHere && curKey !== 'app') {
        this.$store.dispatch('forceRender')
      }
    }
  }
}
</script>

<style scoped>

</style>