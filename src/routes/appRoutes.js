import { About, Home } from '../screens';

const appRoutes = [
  {
    name: 'About',
    component: About,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
    },
  },
];

export default appRoutes;
