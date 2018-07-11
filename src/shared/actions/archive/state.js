// Archive actions
const initState = (nextState = {}) => {
  return {
    gallery: [],
    render: false,
    ...nextState
  }
};

const initGalleryState = (nextState = {}) => {
  return {
    navigatedAlbumName: '',
    render: false,
    ...nextState
  }
};

export {
  initState,
  initGalleryState
}
