import React from 'react';
import { renderRoutes } from 'react-router-config';

const Root = ({ route }) => (
  <>{renderRoutes(route.routes)}</>
);

export default Root;