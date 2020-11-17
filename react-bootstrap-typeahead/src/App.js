import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import cdk from 'cocoda-sdk';
import jskos from 'jskos-tools'

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';

const scheme = {
  uri: "http://zbw.eu/stw",
  identifier: ["http://bartoc.org/en/node/313"],
  VOCID: "stw",
  uriPattern: "^http://zbw\\.eu/stw/descriptor/(\\d+\\-\\d)$",
};

const registry = cdk.initializeRegistry({
  provider: "SkosmosApi",
  api: "https://zbw.eu/beta/skosmos/rest/v1/",
  schemes: [scheme],
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
