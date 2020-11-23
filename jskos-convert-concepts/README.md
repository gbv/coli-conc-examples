# jskos-convert-concepts

> Convert a controlled vocabulary to JSKOS format

This example illustrates to to convert a controlled vocabulary, given as CSV file, into [JSKOS format](https://gbv.github.io/jskos/).

Conversion is implemented with command line tool [jskos-convert](https://www.npmjs.com/package/jskos-cli#jskos-convert) (part of node package [jskos-cli])

[jskos-cli]: https://www.npmjs.com/package/jskos-cli

## Install locally

Install node package [jskos-cli] globally:

~~~bash
npm install -g jskos-cli
jskos-convert --help
~~~

Or install in the current project directory:

~~~bash
npm install
npm run convert -- --help
~~~

## Run conversion

~~~
jskos-convert concepts --scheme animals.scheme.json --marktop animals.csv > animals.ndjson
jskos-validate concepts animals.ndjson
~~~

or

~~~
npm run -s convert -- concepts --scheme animals.scheme.json --marktop animals.csv > animals.ndjson
npm run -s validate concepts animals.ndjson
~~~

## Additional examples

See repository [jskos-data](https://github.com/gbv/jskos-data) with more vocabularies and their conversion to [JSKOS format].
