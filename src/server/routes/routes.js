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
    routes: [
      {
        path: '/',
        exact:true,
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
        routes: [
          { path: '/archive/:gallery',
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
        exact: false,
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
