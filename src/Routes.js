import Home from './containers/Home';
import Shivam from './containers/Shivam';
import Root from './Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Shivam,
        path: '/shivam',
        exact: true
      }
    ]
  }
];

export default routes;