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
    albumName: '',
    render: false,
    activeLightbox: false,
    activeIndex: -1,
    ...nextState
  }
};

export {
  initState,
  initGalleryState
}
