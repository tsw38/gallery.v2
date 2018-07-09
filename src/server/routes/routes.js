import {
  App
} from '../../shared/components';

import {
  Homepage,
  About,
  Login,
  Archive
} from '../../shared/views';

import {
  GlobalActions,
  HomepageActions,
  AboutActions,
  ArchiveActions
} from '../../shared/actions';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact:true,
        component: Homepage,
        preRender: async () => {
          // console.log("--------------------", GlobalActions, '---------------------')
          const requiredToRender = await GlobalActions.imagesHelper.getAllImages();
          return {
            ...HomepageActions.stateManager.initState(),
            images: requiredToRender,
            key: 'homepage'
          };
        }
      },
      {
        path: '/archive/',
        exact:true,
        component: Archive,
        preRender: async () => {
          const gallery = await ArchiveActions.gallery.getThumbnails();
          // console.log('THIS IS THE GALLERY', gallery);
          return {
            ...ArchiveActions.stateManager.initState(),
            gallery,
            key: 'archive'
          }
        }
      },
      {
        path: '/about/',
        exact:true,
        component: About,
        preRender: async () => {
          // console.warn('this is where the prerequired info would be')
          return {
            key: 'about',
            ...AboutActions.stateManager.initState()
          }
        }
      },
      {
        name: 'Login',
        path: '/login/',
        exact:true,
        component: Login,
        preRender: () => {
          return {
            key: 'login',
            requiredStuff: "I NEEEED STUFF DONE HERE"
          }
        }
      }
    ]
  }
]

export default routes;
