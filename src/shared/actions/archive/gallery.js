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

export {
  getThumbnails,
  getGallery
};
