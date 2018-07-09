import { Variables } from '../../utils';

async function getAllImages() {
  const response = await Variables.axios(`${Variables.origin}/api/images`);
  const images = response.data;
  return images.map(image => `${Variables.origin}/api/images/${image}`);
}

export {
  getAllImages
};
