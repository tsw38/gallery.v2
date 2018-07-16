import {
  App
} from '../../shared/components';

import {
  Homepage,
  About,
  Login,
  Archive,
  Gallery,
  Dashboard
} from '../../shared/views';

import {
  GlobalActions,
  HomepageActions,
  AboutActions,
  ArchiveActions,
  LoginActions
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
        exact: false,
        component: Archive,
        routes: [
          { path: '/archive/:gallery',
            component: Gallery,
            preRender: async (gallery) => {
              const images = await ArchiveActions.gallery.getGallery(gallery);
              return {
                ...ArchiveActions.stateManager.initGalleryState(),
                albumName: gallery,
                [gallery]: {images},
                key: 'gallery'
              }
            }
          }
        ],
        preRender: async () => {
          const gallery = await ArchiveActions.gallery.getThumbnails();
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
        path: '/login/',
        exact:true,
        component: Login,
        preRender: async () => {
          console.warn('this is where the prerequired info would be')
          return {
            key: 'login',
            ...LoginActions.stateManager.initState()
          }
        }
      },
      {
        path: '/dashboard/',
        exact:false,
        component: Dashboard,
        preRender: async () => {
          console.warn('this is where the prerequired info would be')
          return {
            key: 'dashboard',
            // ...LoginActions.stateManager.initState()
          }
        }
      }
    ]
  }
]

export default routes;
