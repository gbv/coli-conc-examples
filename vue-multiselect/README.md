# coli-conc-vue-multiselect

> Select concepts from a vocabulary with [Vue-Multiselect](https://vue-multiselect.js.org/)

This sample web application build with the [Vue] JavaScript framework uses [cocoda-sdk] to search on a vocabulary and [jskos-tools] to show concept information.

See [react-bootstrap-typeahead](react-bootstrap-typeahead) for an example with same functionality based on React framework.

## Try out locally

```bash
npm i
npm run serve
```

## Try out online

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gbv/coli-conc-examples/tree/main/vue-multiselect?file=/src/App.vue)

## Ideas for improvements/changes

- Make it look nicer, add some interface around the search field
- Use a different registry and vocabulary, offer a selection of multiple vocabularies
- Combine this and the [vue-browsing example](https://github.com/gbv/coli-conc-examples/tree/main/vue-browsing)
- [Debounce](https://davidwalsh.name/javascript-debounce-function) calling the `search` method

[vue]: https://vuejs.org/
[cocoda-sdk]: https://github.com/gbv/cocoda-sdk#readme
[jskos-tools]: https://github.com/gbv/jskos-tools#readme
