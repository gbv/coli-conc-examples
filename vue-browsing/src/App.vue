<template>
  <div id="app">
    <concept-details
      v-if="selected"
      :concept="selected"
      :registry="registry"
      @select="selected = $event" />
    <div
      v-else
      class="top-concepts">
      <concept
        v-for="concept in topConcepts"
        :key="concept.uri"
        :concept="concept"
        @click.native="selected = concept" />
    </div>
  </div>
</template>

<script>
import Concept from "./components/Concept"
import ConceptDetails from "./components/ConceptDetails"
import cdk from "cocoda-sdk"

const scheme = {
  uri: "http://zbw.eu/stw",
  identifier: ["http://bartoc.org/en/node/313"],
  VOCID: "stw",
  uriPattern: "^http://zbw\\.eu/stw/descriptor/(\\d+\\-\\d)$",
}

export default {
  name: "App",
  components: {
    Concept,
    ConceptDetails,
  },
  data() {
    return {
      // top concepts loaded in mounted
      topConcepts: [],
      // selected concept
      selected: null,
      // scheme we want to tag with (see above)
      scheme,
      // registry we are using for API queries
      registry: cdk.initializeRegistry({
        provider: "SkosmosApi",
        api: "https://zbw.eu/beta/skosmos/rest/v1/",
        schemes: [scheme],
      }),
    }
  },
  mounted() {
    this.loadTop()
  },
  methods: {
    async loadTop() {
      this.topConcepts = await this.registry.getTop({ scheme: this.scheme })
      this.results = this.topConcepts
    },
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
