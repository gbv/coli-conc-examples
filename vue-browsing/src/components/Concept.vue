<template>
  <div class="concept">
    <b>{{ notation }}</b> {{ label }}
  </div>
</template>

<script>
import jskos from "jskos-tools"

export default {
  name: "Concept",
  props: ["concept"],
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
