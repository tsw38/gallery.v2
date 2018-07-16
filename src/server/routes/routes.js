import {
  App
} from '../../shared/components';

import {
  About,
  Login,
  Archive,
  Gallery,
  Homepage,
  Dashboard
} from '../../shared/views';

const {
  MainDashboard
} = Dashboard;

import {
  AboutActions,
  LoginActions,
  GlobalActions,
  ArchiveActions,
  HomepageActions,
  DashboardActions
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
        component: MainDashboard,
        preRender: async () => {
          return {
            key: 'dashboard',
            ...DashboardActions.stateManager.initState()
          }
        }
      }
    ]
  }
]

export default routes;
