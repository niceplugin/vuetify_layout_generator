<template>
  <v-bottom-navigation
      :absolute="props['absolute'].val"
      :active-class="props['active-class'].val"
      :app="props['app'].val"
      :background-color="props['background-color'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :fixed="props['fixed'].val"
      :grow="props['grow'].val"
      :height="props['height'].val"
      :hide-on-scroll="props['hide-on-scroll'].val"
      :horizontal="props['horizontal'].val"
      :light="props['light'].val"
      :max-height="props['max-height'].val"
      :max-width="props['max-width'].val"
      :min-height="props['min-height'].val"
      :min-width="props['min-width'].val"
      :scroll-target="props['scroll-target'].val"
      :scroll-threshold="props['scroll-threshold'].val"
      :shift="props['shift'].val"
      :width="props['width'].val"
  >
    Bottom-Navigation
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "AppBottomNavigation",

  computed: {
    props() {
      return this.$store.state.bottomNavigation.props
    },
  }
}
</script>

<style scoped>

</style>