import { Variables } from '../../utils';

export async function updateBackground(photoID, updatedState) {
  console.log('updating', photoID, updatedState)
  const response = await Variables.axios({
    method: 'POST',
    url: `${Variables.origin}/api/images`,
    data: {
      photoID,
      updatedState
    }
  });
  return response.data;
}
