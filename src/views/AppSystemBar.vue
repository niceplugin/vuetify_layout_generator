<template>
  <v-system-bar
      :absolute="props['absolute'].val"
      :app="props['app'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :fixed="props['fixed'].val"
      :height="props['height'].val"
      :light="props['light'].val"
      :lights-out="props['lights-out'].val"
      :window="props['window'].val"
  >
    System-Bar
  </v-system-bar>
</template>

<script>
export default {
  name: "AppSystemBar",

  computed: {
    props() {
      return this.$store.state.systemBar.props
    }
  }
}
</script>