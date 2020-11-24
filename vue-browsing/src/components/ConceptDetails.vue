<template>
  <div class="concept-details">
    <div class="ancestors">
      <div
        class="selectable"
        @click="$emit('select', null)">
        ^ Top
      </div>
      <concept
        v-for="ancestor in ancestors"
        :key="ancestor.uri"
        :concept="ancestor"
        @click.native="$emit('select', ancestor)" />
    </div>

    <concept
      :concept="_concept"
      :selectable="false" />
    <small>
      URI: <a :href="_concept.uri">{{ _concept.uri }}</a><br>
      <!-- Show all prefLabels as "Label (language)", separated by comma -->
      Labels: {{ Object.entries(_concept.prefLabel).map(e => `${e[1]} (${e[0]})`).join(", ") }}
    </small>

    <div class="narrower">
      Narrower:
      <concept
        v-for="child in narrower"
        :key="child.uri"
        :concept="child"
        @click.native="$emit('select', child)" />
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
  props: {
    concept: {
      type: Object,
      required: true,
    },
    registry: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      details: null,
      ancestors: [],
      narrower: [],
    }
  },
  computed: {
    // merge details into concept
    _concept() {
      return Object.assign(this.concept || {}, this.details || {})
    },
  },
  mounted() {
    // load details for current concept
    this.loadDetails()
    // load ancestors and narrower
    this.loadAncestors()
    this.loadNarrower()
  },
  methods: {
    async loadDetails() {
      this.details = (await this.registry.getConcepts({ concepts: [this.concept] }))[0]
    },
    async loadAncestors() {
      this.ancestors = []
      this.ancestors = await this.registry.getAncestors({ concept: this.concept })
    },
    async loadNarrower() {
      this.narrower = []
      this.narrower = await this.registry.getNarrower({ concept: this.concept })
    },
  },
}
</script>

<style scoped>
.ancestors, .narrower {
  margin: 20px 0;
}
</style>
