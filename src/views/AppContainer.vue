<template>
  <v-container
      :fluid="props['fluid'].val"
      :id="props['id'].val"
      :tag="props['tag'].val"
  >
    Container
    <br><br><br><br><br><br><br><br><br><br>
    Container
    <br><br><br><br><br><br><br><br><br><br>
    Container
    <br><br><br><br><br><br><br><br><br><br>
    Container
    <br><br><br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
export default {
  name: "AppContainer",

  computed: {
    props() {
      return this.$store.state.container.props
    },
  }
}
</script>

<style scoped>
</style>