import { Variables } from '../../utils';

async function getThumbnails() {
  const response = await Variables.axios(`${Variables.origin}/api/archive`);
  const gallery  = response.data;
  return gallery;
}

async function getGallery(galleryId) {
  const response = await Variables.axios(`${Variables.origin}/api/gallery/${galleryId}`);

  return response.data;
}

async function handleImageClick(imageIndex, props) {
  console.log('you clicked on me!!!!!', imageIndex, 2);
  const galleryState= await props.getParentState('gallery');

  console.warn('galleryState', galleryState);
  await props.stateUpdater('gallery', {
    ...galleryState,
    activeLightbox: true,
    activeIndex: imageIndex
  });
}

export {
  getThumbnails,
  getGallery,
  handleImageClick
};
