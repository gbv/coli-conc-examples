import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import cdk from 'cocoda-sdk';
import jskos from 'jskos-tools'

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';

const scheme = {
  uri: "http://uri.gbv.de/terminology/msc2020/",
};

const registry = cdk.initializeRegistry({
  provider: "ConceptApi",
  api: "https://coli-conc.gbv.de/api/",
});

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  return (
<AsyncTypeahead
  id="example"
  placeholder="Type to search..."
  multiple
  isLoading={isLoading}
  labelKey={concept => `${jskos.notation(concept)} ${jskos.prefLabel(concept)}`}
  filterBy={() => true}
  onSearch={(search) => {
    setLoading(true)
    registry.search({ search, scheme }).then(results => {
        //console.log(results)
        setOptions(results);
        setLoading(false);
      });
  }}
  options={options}
/>
  );
}
