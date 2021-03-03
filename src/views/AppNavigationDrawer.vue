<template>
  <v-navigation-drawer
      :absolute="props['absolute'].val"
      :app="props['app'].val"
      :bottom="props['bottom'].val"
      :clipped="props['clipped'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :disable-resize-watcher="props['disable-resize-watcher'].val"
      :disable-route-watcher="props['disable-route-watcher'].val"
      :expand-on-hover="props['expand-on-hover'].val"
      :fixed="props['fixed'].val"
      :floating="props['floating'].val"
      :height="props['height'].val"
      :hide-overlay="props['hide-overlay'].val"
      :light="props['light'].val"
      :mini-variant="props['mini-variant'].val"
      :mini-variant-width="props['mini-variant-width'].val"
      :mobile-breakpoint="props['mobile-breakpoint'].val"
      :overlay-color="props['overlay-color'].val"
      :overlay-opacity="props['overlay-opacity'].val"
      :permanent="props['permanent'].val"
      :right="props['right'].val"
      :src="props['src'].val"
      :stateless="props['stateless'].val"
      :tag="props['tag'].val"
      :temporary="props['temporary'].val"
      :touchless="props['touchless'].val"
      :width="props['width'].val"
  >
    Default
    <br><br><br><br><br><br><br><br><br><br>
    Default
    <br><br><br><br><br><br><br><br><br><br>
    Default
    <br><br><br><br><br><br><br><br><br><br>
    Default
    <br><br><br><br><br><br><br><br><br><br>

    <template v-if="slots.prepend.val" v-slot:prepend>
      <br>Prepend<br><br>
    </template>

    <template v-if="slots.append.val" v-slot:append>
      <br>Append<br><br>
    </template>

    <template v-if="slots.img.val" v-slot:img="props">
      <v-img v-bind="props"/>
    </template>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppNavigationDrawer",

  computed: {
    props() {
      return this.$store.state.navigationDrawer.props
    },
    slots() {
      return this.$store.state.navigationDrawer.slots
    },
  },
}
</script>

<style scoped>

</style>