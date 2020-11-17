<template>
  <div class="concept-detail">
    <div v-if="concept">
      <p>
        <b>{{ jskos.notation(concept) }}</b>
        {{ jskos.prefLabel(concept) }}
      </p>
      <p class="small">
        <a :href="concept.uri">{{ concept.uri }}</a>
      </p>
    </div>
    <div v-else><p>No concept selected</p></div>
  </div>
</template>

<script>
import jskos from "jskos-tools";

export default {
  name: "ConceptDetail",
  props: {
    concept: {
      type: Object,
    },
  },
  data() {
    return {
      jskos,
    };
  },
  methods: {},
};
</script>

<style scoped>
.concept-detail {
  margin: 5px;
  border: 1px solid black;
}
p {
  margin-block-start: 10px;
  margin-block-end: 10px;
}
.small {
  font-size: 0.9em;
}
</style>
