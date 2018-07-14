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
  const galleryState= await props.getParentState('gallery');
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
