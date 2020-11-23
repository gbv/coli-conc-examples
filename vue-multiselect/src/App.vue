<template>
  <div id="app">
    <multiselect
      v-model="selected"
      placeholder="Type to search"
      track-by="uri"
      :options="results"
      :loading="isLoading"
      :custom-label="labelFor"
      :multiple="true"
      :max-height="300"
      :hide-selected="true"
      :internal-search="false"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      @search-change="search" />
  </div>
</template>

<script>
import Multiselect from "vue-multiselect"
import cdk from "cocoda-sdk"
import jskos from "jskos-tools"

const scheme = {
  uri: "http://zbw.eu/stw",
  identifier: ["http://bartoc.org/en/node/313"],
  VOCID: "stw",
  uriPattern: "^http://zbw\\.eu/stw/descriptor/(\\d+\\-\\d)$",
}
// registry we are using for API queries
const registry = cdk.initializeRegistry({
  provider: "SkosmosApi",
  api: "https://zbw.eu/beta/skosmos/rest/v1/",
  schemes: [scheme],
})

export default {
  name: "App",
  components: {
    Multiselect,
  },
  data() {
    return {
      isLoading: false,
      // top concepts loaded in mounted
      topConcepts: [],
      // selected concepts (= shown as tags)
      selected: [],
      // results of the search query
      results: [],
      // cancel method from previous request
      cancel: null,
    }
  },
  mounted() {
    this.loadTop()
  },
  methods: {
    async loadTop() {
      this.topConcepts = await registry.getTop({ scheme })
      this.results = this.topConcepts
    },
    // we want to show concepts as [notation] [label]
    labelFor(concept) {
      return `${jskos.notation(concept)} ${jskos.prefLabel(concept)}`
    },
    async search(query) {
      this.isLoading = true
      // cancel previos request if necessary
      this.cancel && this.cancel("canceled")
      this.results = []
      let results = this.topConcepts
      if (query) {
        const promise = registry.search({
          search: query,
          scheme,
        })
        this.cancel = promise.cancel
        try {
          results = await promise
        } catch (error) {
          if (error.message === "canceled") {
            return
          }
          // seems to be a network error, logging to console
          console.error(error)
          results = []
        }
        this.cancel = null
      }
      this.results = results
      this.isLoading = false
    },
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
