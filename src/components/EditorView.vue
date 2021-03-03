<template>
  <v-container class="need-toolbar">
    <editor-view-form v-if="tapForm"/>
    <editor-view-code v-else/>
  </v-container>
</template>

<script>
import EditorViewForm from "@/components/EditorViewForm"
import EditorViewCode from "@/components/EditorViewCode"

export default {
  name: "EditorView",

  components: {
    EditorViewForm,
    EditorViewCode
  },

  computed: {
    tapForm() {
      return this.$store.state.editor.toolbar === 1
    }
  }
}
</script>

<style scoped>

</style>