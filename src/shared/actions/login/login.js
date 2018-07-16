import { Variables } from '../../utils';

async function login({userName, password}) {
  const token = await Variables.axios({
    method: 'POST',
    url: `${Variables.origin}/api/login`,
    headers: {
      authorization: `Bearer ${process.env.KEY}`
    },
    data: {
      userName,
      password: btoa(password)
    }
  });

  console.log(token.data, 2);
  return token;
  // const gallery  = response.data;
  // return gallery;
}

export {
  login
};