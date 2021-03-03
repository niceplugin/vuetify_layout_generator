<template>
  <v-app :class="outline">

    <template v-if="updated">

      <app-navigation-drawer v-if="enabled.navigationDrawer"/>

      <app-system-bar v-if="enabled.systemBar"/>

      <app-bar v-if="enabled.appBar"/>

      <v-main>
        <app-toolbar v-if="enabled.toolbar"/>

        <app-container v-if="enabled.container"/>
      </v-main>

      <app-footer v-if="enabled.footer"/>

      <app-bottom-navigation v-if="enabled.bottomNavigation"/>

    </template>

    <editor></editor>
  </v-app>
</template>

<script>
import stateOutside from "@/store/stateOutside";

export default {
  computed: {
    enabled() {
      const obj = {}
      const keys = Object.keys(stateOutside)
      keys.forEach(comp => obj[comp] = stateOutside[comp].enabled)
      return obj
    },
    outline() {
      return this.$store.state.editor.outline ? 'outline' : ''
    },
    updated() {
      return this.$store.state.editor.updated
    }
  },

  components: {
    AppNavigationDrawer: () => import('./views/AppNavigationDrawer'),
    AppSystemBar: () => import('./views/AppSystemBar'),
    AppBar: () => import('./views/AppAppBar'),
    AppToolbar: () => import('./views/AppToolbar'),
    AppContainer: () => import('./views/AppContainer'),
    AppFooter: () => import('./views/AppFooter'),
    AppBottomNavigation: () => import('./views/AppBottomNavigation'),
    Editor: () => import('./views/Editor')
  }
}
</script>

<style lang="sass" scoped>
.outline
  *
    outline: 1px solid red
</style>
