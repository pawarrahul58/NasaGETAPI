import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './components/Table';
import reportWebVitals from './reportWebVitals';

var commonData = {
  "api_uri": "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY", //Change this api_key value with your Key
  "headerList": [{
    "header": "ID.",
    "name": "id"
  }, {
    "header": "NEO REFERENCE ID",
    "name": "neo_reference_id",
  }, {
    "header": "NAME",
    "name": "name"
  }, {
    "header": "NASA JPL URL",
    "name": "nasa_jpl_url"
  }, {
    "header": "ABSOLUTE MAGNITUDE H",
    "name": "absolute_magnitude_h"
  }, {
    "header": "ESTIMATED DIAMETER (KM)",
    "name": "estimated_diameter_kilometers_estimated_diameter_max",
  }, {
    "header": "",
    "name": "estimated_diameter_kilometers_estimated_diameter_min"
  }]
};

ReactDOM.render(
  <React.StrictMode>
    <Table data={ commonData }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
