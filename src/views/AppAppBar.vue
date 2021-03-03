<template>
  <v-app-bar
      :absolute="props['absolute'].val"
      :app="props['app'].val"
      :bottom="props['bottom'].val"
      :clipped-left="props['clipped-left'].val"
      :clipped-right="props['clipped-right'].val"
      :collapse="props['collapse'].val"
      :collapse-on-scroll="props['collapse-on-scroll'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :dense="props['dense'].val"
      :elevate-on-scroll="props['elevate-on-scroll'].val"
      :elevation="props['elevation'].val"
      :extended="props['extended'].val"
      :extension-height="props['extension-height'].val"
      :fade-img-on-scroll="props['fade-img-on-scroll'].val"
      :fixed="props['fixed'].val"
      :flat="props['flat'].val"
      :floating="props['floating'].val"
      :height="props['height'].val"
      :hide-on-scroll="props['hide-on-scroll'].val"
      :inverted-scroll="props['inverted-scroll'].val"
      :light="props['light'].val"
      :max-height="props['max-height'].val"
      :max-width="props['max-width'].val"
      :min-height="props['min-height'].val"
      :min-width="props['min-width'].val"
      :outlined="props['outlined'].val"
      :prominent="props['prominent'].val"
      :rounded="props['rounded'].val"
      :scroll-off-screen="props['scroll-off-screen'].val"
      :scroll-target="props['scroll-target'].val"
      :scroll-threshold="props['scroll-threshold'].val"
      :shaped="props['shaped'].val"
      :short="props['short'].val"
      :shrink-on-scroll="props['shrink-on-scroll'].val"
      :src="props['src'].val"
      :tag="props['tag'].val"
      :tile="props['tile'].val"
      :width="props['width'].val"
  >
    <v-app-bar-nav-icon v-if="etc['v-app-bar-nav-icon'].val"/>

    <v-toolbar-title v-if="etc['v-toolbar-title'].val">
      App Bar
    </v-toolbar-title>

    <template v-if="slots.img.val" v-slot:img="{ props }">
      <v-img v-bind="props"/>
    </template>

    <template v-if="slots.extension.val" v-slot:extension>
      Extension Slot
    </template>

  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  computed: {
    props() {
      return this.$store.state.appBar.props
    },
    slots() {
      return this.$store.state.appBar.slots
    },
    etc() {
      return this.$store.state.appBar.etc
    }
  }
}
</script>

<style scoped>

</style>