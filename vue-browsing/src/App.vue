<template>
  <div id="app">
    <concept-details
      v-if="selected"
      :key="selected.uri"
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
  uri: "http://uri.gbv.de/terminology/msc2020/",
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
      // registry we are using for API queries
      registry: cdk.initializeRegistry({
        provider: "ConceptApi",
        api: "https://coli-conc.gbv.de/api/",
      }),
    }
  },
  mounted() {
    this.loadTop()
  },
  methods: {
    async loadTop() {
      this.topConcepts = await this.registry.getTop({ scheme })
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
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.selectable:hover, a:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
