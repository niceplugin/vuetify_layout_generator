<template>
  <v-list-item :to="item.to">
    <v-list-item-icon v-if="item.icon">
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>

    <v-list-item-title v-text="item.title">
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "CustomNavListItem",

  props: {
    item: {
      type: Object,
      default: () => ({
        title: undefined,
        icon: undefined,
        to: undefined
      })
    }
  }
}
</script>

<style scoped>

</style>