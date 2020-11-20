<template>
  <div class="concept-details">
    <!-- Ancestors -->
    <div class="ancestors">
      <div
        @click="$emit('select', null)">
        ^ Top Concepts
      </div>
      <concept
        v-for="ancestor in ancestors"
        :key="ancestor.uri"
        :concept="ancestor"
        @click.native="$emit('select', ancestor)" />
    </div>
    <!-- Concept -->
    <concept :concept="concept" />
    <!-- Details -->

    <!-- Narrower -->
    <div class="narrower">
      Narrower:
      <concept
        v-for="narrower in narrower"
        :key="narrower.uri"
        :concept="narrower"
        @click.native="$emit('select', narrower)" />
    </div>
  </div>
</template>

<script>
import Concept from "./Concept"

export default {
  name: "ConceptDetails",
  components: {
    Concept,
  },
  props: ["concept", "registry"],
  data() {
    return {
      ancestors: [],
      narrower: [],
    }
  },
  mounted() {
    this.loadRelatives()
  },
  watch: {
    concept() {
      this.loadRelatives()
    },
  },
  methods: {
    loadRelatives() {
      // load ancestors and narrower
      // TODO: Set conditions when they don't have to be loaded
      this.loadAncestors()
      this.loadNarrower()
    },
    async loadAncestors() {
      this.ancestors = await this.registry.getAncestors({ concept: this.concept })
      console.log("Ancestors:", this.ancestors)
    },
    async loadNarrower() {
      this.narrower = await this.registry.getNarrower({ concept: this.concept })
      console.log("Narrower:", this.narrower)
    },
  },
}
</script>

<style scoped>
.ancestors, .narrower {
  margin: 20px 0;
}
</style>
