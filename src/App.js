import React, { Fragment } from 'react';

import FormPanel from './components/FormPanel';
import PlanetsData from './components/PlanetsData';
import CurrencyConverter from './components/CurrencyConverter';

const App = () =>  (
  <Fragment>
    <FormPanel />
    <PlanetsData />
    <CurrencyConverter />
  </Fragment>
);

export default App;