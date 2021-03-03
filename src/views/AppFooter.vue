<template>
  <v-footer
      :absolute="props['absolute'].val"
      :app="props['app'].val"
      :color="props['color'].val"
      :dark="props['dark'].val"
      :elevation="props['elevation'].val"
      :fixed="props['fixed'].val"
      :height="props['height'].val"
      :inset="props['inset'].val"
      :light="props['light'].val"
      :max-height="props['max-height'].val"
      :max-width="props['max-width'].val"
      :min-height="props['min-height'].val"
      :min-width="props['min-width'].val"
      :outlined="props['outlined'].val"
      :padless="props['padless'].val"
      :rounded="props['rounded'].val"
      :shaped="props['shaped'].val"
      :tag="props['tag'].val"
      :tile="props['tile'].val"
      :width="props['width'].val"
  >
    Footer
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",

  computed: {
    props() {
      return this.$store.state.footer.props
    },
  }
}
</script>

<style scoped>

</style>