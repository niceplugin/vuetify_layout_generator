<template>
  <v-toolbar
      :absolute="props['absolute'].val"
      :collapse="props['collapse'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :dense="props['dense'].val"
      :elevation="props['elevation'].val"
      :extended="props['extended'].val"
      :extension-height="props['extension-height'].val"
      :flat="props['flat'].val"
      :floating="props['floating'].val"
      :height="props['height'].val"
      :light="props['light'].val"
      :max-height="props['max-height'].val"
      :max-width="props['max-width'].val"
      :min-height="props['min-height'].val"
      :min-width="props['min-width'].val"
      :outlined="props['outlined'].val"
      :prominent="props['prominent'].val"
      :rounded="props['rounded'].val"
      :shaped="props['shaped'].val"
      :short="props['short'].val"
      :src="props['src'].val"
      :tag="props['tag'].val"
      :tile="props['tile'].val"
      :width="props['width'].val"
  >
    <v-app-bar-nav-icon v-if="etc['v-app-bar-nav-icon'].val"/>

    <v-toolbar-title v-if="etc['v-toolbar-title'].val">
      Toolbar
    </v-toolbar-title>

    <template v-if="slots.img.val" v-slot:img="{ props }">
      <v-img v-bind="props"/>
    </template>

    <template v-if="slots.extension.val" v-slot:extension>
      Extension Slot
    </template>

  </v-toolbar>
</template>

<script>
export default {
  name: "AppToolbar",

  computed: {
    props() {
      return this.$store.state.toolbar.props
    },
    slots() {
      return this.$store.state.toolbar.slots
    },
    etc() {
      return this.$store.state.toolbar.etc
    }
  }
}
</script>

<style scoped>

</style>