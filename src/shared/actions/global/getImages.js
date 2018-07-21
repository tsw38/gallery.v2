import { Variables } from '../../utils';

const getAllImages = async (forBackground = false) => {
  const response = await Variables.axios(`${Variables.origin}/api/images${forBackground ? '?backgrounds=true' : ''}`);
  const images = response.data;

  return (forBackground)
    ? images.map(image => `${Variables.origin}/api/images/${image.albumUrl}/${image.photoName}`)
    : images;
}

export {
  getAllImages
};
