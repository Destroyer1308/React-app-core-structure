import { useEffect, useRef } from 'react';
import { matchRoutes } from 'react-router-config';

import Routes from '../Routes';

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const getMatchedRoutes = path => {
  const routes = matchRoutes(Routes, path);
  return routes;
};

const loadRouteData = path => {

  const routes = getMatchedRoutes(path);
  if (!routes.length) {
    return Promise.resolve({
      notFound: true,
    });
  }
    const matchedRoute = routes[0].route;
    const promises = routes
    .map(({ route }) => {
        const promiseArr = [];
      if (route.component.load) {
        promiseArr.push(route.component.load());
      }
      return Promise.all(promiseArr);
    })
    .map(promise => {
      if (!promise) {
        return null;
      }
      return new Promise(resolve => {
        const resolveCb = data => {
          resolve({
            ...data,
            routeData: matchedRoute,
          });
        };
        promise.then(resolveCb).catch(resolveCb);
      });
    });
  return Promise.all(promises);
};

const getUrlParams = search => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};

export {
  usePrevious,
  getMatchedRoutes,
  loadRouteData,
  getUrlParams
};