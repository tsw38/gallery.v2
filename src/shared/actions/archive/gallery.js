import { Variables } from '../../utils';

async function getThumbnails() {
  const response = await Variables.axios(`${Variables.origin}/api/archive`);
  const gallery  = response.data;
  return gallery;
  // return images.map(image => `${Variables.origin}/api/images/${image}`);
}

export {
  getThumbnails
};
