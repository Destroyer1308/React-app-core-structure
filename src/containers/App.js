import React from 'react';

import { renderRoutes } from 'react-router-config';

import Routes from '../Routes';
import RouteLoader from '../RouteLoader';

import './App.css';

const App = () => (
    <div id="mainContent">
      <RouteLoader>{renderRoutes(Routes)}</RouteLoader>
    </div>
);

export default App;