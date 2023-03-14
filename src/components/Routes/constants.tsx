/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

import { User } from 'contexts/UserContext/reducer';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard/screens/Home'));
const SignUp = lazy(() => import('../../screens/Dashboard/screens/SignUp'));
const Login = lazy(() => import('../../screens/Dashboard/screens/Login'));
const Details = lazy(() => import('../../screens/Dashboard/screens/Details'));
// Add imports for screens above (FOR GENERATORS, DO NOT REMOVE)

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

/* When adding routes, add them ABOVE the Home route
 * or it will redirect you to incorrect screens */
export const ROUTES = [
  // Leaving this as an example for then the Login screen exists
  {
    path: PATHS.home,
    element: <Home />,
    title: 'Routes:homeTitle',
    description: 'Routes:homeDescription',
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PUBLIC_PATH)
  },
  {
    path: PATHS.signUp,
    element: <SignUp />,
    title: 'Routes:signUpTitle',
    description: 'Routes:signUpDescription',
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PUBLIC_PATH)
  },
  {
    path: PATHS.login,
    element: <Login />,
    title: 'Routes:loginTitle',
    description: 'Routes:loginDescription',
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PRIVATE_PATH)
  },
  {
    path: PATHS.details,
    element: <Details />,
    title: 'Routes:detailsTitle',
    description: 'Routes:detailsDescription',
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PRIVATE_PATH)
  }
];
