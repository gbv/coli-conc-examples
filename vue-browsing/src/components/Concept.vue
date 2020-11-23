<template>
  <div
    :class="{
      concept: true,
      selectable,
    }">
    <b>{{ notation }}</b> {{ label }}
  </div>
</template>

<script>
import jskos from "jskos-tools"

export default {
  name: "Concept",
  props: {
    concept: {
      type: Object,
      required: true,
    },
    selectable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    notation() {
      return jskos.notation(this.concept)
    },
    label() {
      return jskos.prefLabel(this.concept)
    },
  },
}
</script>
