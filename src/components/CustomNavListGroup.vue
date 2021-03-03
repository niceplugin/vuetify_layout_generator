<template>
  <v-list-group
      :prepend-icon="item.icon"
      no-action
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>
    </template>

    <custom-nav-list-item
        v-for="(child, i) in item.child"
        :key="item.title + i"
        :item="child"
    ></custom-nav-list-item>
  </v-list-group>
</template>

<script>
import CustomNavListItem from "@/components/CustomNavListItem"

export default {
  name: "CustomNavListGroup",

  components: {
    CustomNavListItem
  },

  props: {
    item: {
      type: Object,
      default: () => ({
        title: undefined,
        icon: undefined,
        to: undefined,
        child: []
      })
    }
  }
}
</script>

<style scoped>

</style>