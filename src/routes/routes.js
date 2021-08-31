import { Received, Hold, Marked, Sent, All, Trash, NotFound } from '@pages';


const routes = [
  {
    key: 'received',
    path: '/received',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Received,
  },
  {
    key: 'received',
    path: '/',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Received,
  },
  {
    key: 'marked',
    path: '/marked',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Marked,
  },
  {
    key: 'hold',
    path: '/hold',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Hold,
  },
  {
    key: 'sent',
    path: '/sent',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Sent,
  },
  {
    key: 'all',
    path: '/all',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: All,
  },
  {
    key: 'trash',
    path: '/trash',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Trash,
  },
  {
    key: 'not-found',
    path: '',
    exact: false,
    privateRoute: false,
    role: 'regular',
    component: NotFound,
  },
];

export default routes;
