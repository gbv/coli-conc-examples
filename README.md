# coli-conc-examples

> Example projects demonstrating how to use services of project coli-conc

This repository contains simple examples and documentation to illustrate usage and features of vocabulary services and libraries developed as part of [project coli-conc](https://coli-conc.gbv.de/). The content was prepared for [a SWIB 2020 Workshop](http://swib.org/swib20/programme.html#abs06) (participants [join the chat](https://swib20.collocall.de/swib20/channels/coli-conc-workshop)) but it can also be used independently. Most examples can be run locally or at [CodeSandbox](https://codesandbox.io/).

## Install locally

On a system with git, NodeJS, and npm:

~~~bash
git clone https://github.com/gbv/coli-conc-examples.git
cd coli-conc-examples
./install.sh # calls `npm install` in each directory
~~~

## Source examples

Each example is located in a subdirectory with it's own `README.md` for additional description.

* **[vue-multiselect](vue-multiselect)** select concepts from a vocabulary with [Vue-Multiselect]. 

  Uses [cocoda-sdk] to search and access concepts from a vocabulary and [jskos-tools] to show concept information

  [![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gbv/coli-conc-examples/tree/main/vue-multiselect?file=/src/App.vue)

* **[react-bootstrap-typeahead](react-bootstrap-typeahead)** select concepts from a vocabulary with [React Bootstrap Typeahead].

  Uses [cocoda-sdk] to search and access concepts from a vocabulary and [jskos-tools] to show concept information

  [![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gbv/coli-conc-examples/tree/main/react-bootstrap-typeahead?file=/src/App.vue)

* **[vue-browsing](vue-browsing)**

  Uses [cocoda-sdk] to browse concepts from a vocabulary and [jskos-tools] to show concept information

  [![Edit in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gbv/coli-conc-examples/tree/main/vue-browsing?file=/src/App.vue)

* **[jskos-convert-concepts](jskos-convert-concepts)**

  Uses [jskos-cli] to convert a CSV file with a vocabulary into JSKOS format

* **[jskos-tools-examples](https://observablehq.com/@nichtich/jskos-tools-examples)**

  Process JSKOS data with [jskos-tools] in [Observable](https://observablehq.com/)
  
[Vue-Multiselect]: https://vue-multiselect.js.org/
[React Bootstrap Typeahead]: https://www.npmjs.com/package/react-bootstrap-typeahead
[cocoda-sdk]: https://github.com/gbv/cocoda-sdk#readme
[jskos-cli]: https://github.com/gbv/jskos-cli#readme
[jskos-tools]: https://github.com/gbv/jskos-tools#readme
[jskos-server]: https://github.com/gbv/jskos-server#readme
[login-server]: https://github.com/gbv/login-server#readme
[wikidata-jskos]: https://github.com/gbv/wikidata-jskos#readme

## External examples

See production applications and services to learn about additional functionality:

* **[jskos-server]** provides a web service to manage JSKOS data. See for instance

    * [BARTOC API](https://bartoc.org/api) to access content of [BARTOC](https://bartoc.org/) terminology registry
    * [Cocoda JSKOS Server](https://coli-conc.gbv.de/api/) to access the main registry of [Cocoda](https://coli-conc.gbv.de/cocoda/) mapping application

* **[login-server]** is used for authentification against existing identity providers. No additional passwords required! Try out [our login server instance](https://coli-conc.gbv.de/login/) by logging in with GitHub, Wikimedia, ORCID and see the [API demo](https://coli-conc.gbv.de/login/api). There is also [a client library](https://github.com/gbv/login-client).

* **[wikidata-jskos]** is a wrapper for read- and write-access to [Wikidata] via JSKOS API (the same API as implemented with [jskos-server]). More read-only wrappers to other terminology services (e.g. [Skosmos]) are part of [cocoda-sdk].

[Skosmos]: http://skosmos.org/
[Wikidata]: https://wikidata.org/

## Contribute

What features would you like to be shown? Questions and contributions are welcome, best at <https://github.com/gbv/coli-conc-examples/issues>

## License

The content of this repository can be used freely without any restrictions ([Unlicense](https://unlicense.org/))
