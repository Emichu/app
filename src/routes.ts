import HomePage from './pages/Home.page';
import ViewPage from './pages/View.Page';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/view/:id',
    exact: true,
    component: ViewPage
  }
];

export default routes;