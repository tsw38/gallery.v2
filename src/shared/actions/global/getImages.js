const axios  = (typeof window !== 'undefined') ? window.axios = require('axios') : require('axios');
const origin = "https://tylerscott.gallery";

async function getAllImages() {
  const response = await axios(`${origin}/api/images`);
  const images = response.data;
  return images.map(image => `${origin}/api/images/${image}`);
}

export {
  getAllImages
};
