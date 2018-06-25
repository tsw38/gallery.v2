import {
  App
} from '../../shared/components';

import {
  Homepage,
  About,
  Login,
  Archive
} from '../../shared/views';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact:true,
        component: Homepage,
        preRender: () => {
          return "I NEEEED STUFF DONE HERE"
        }
      },
      {
        path: '/archive/',
        exact:true,
        component: Archive,
        preRender: () => {
          return "I NEEEED STUFF DONE HERE"
        }
      },
      {
        path: '/about/',
        exact:true,
        component: About,
        preRender: () => {
          return "I NEEEED STUFF DONE HERE"
        }
      },
      {
        path: '/login/',
        exact:true,
        component: Login,
        preRender: () => {
          return "I NEEEED STUFF DONE HERE"
        }
      }
    ]
  }
]

export default routes;
