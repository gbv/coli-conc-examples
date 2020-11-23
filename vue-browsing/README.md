# coli-conc-vue-browsing

> Browse concepts from a vocabulary

This sample web application build with the [Vue] JavaScript framework uses [cocoda-sdk] to browse a vocabulary and [jskos-tools] to show concept information.

## Try out locally

```bash
npm i
npm run serve
```

## Try out online

[![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gbv/coli-conc-examples/tree/main/vue-browsing?file=/src/App.vue)

## Ideas for improvements/changes

- Make it look nicer
- Use a different registry and vocabulary, offer a selection of multiple vocabularies
- Add a search field for concepts, like in the [vue-multiselect example](https://github.com/gbv/coli-conc-examples/tree/main/vue-multiselect)
- Instead of loading concept details every time a new concept is selected, save the whole concept tree in memory as it is loaded

[vue]: https://vuejs.org/
[cocoda-sdk]: https://github.com/gbv/cocoda-sdk#readme
[jskos-tools]: https://github.com/gbv/jskos-tools#readme
