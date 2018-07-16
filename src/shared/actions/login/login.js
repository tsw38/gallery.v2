import { Variables } from '../../utils';

async function login({userName = '', password = ''}) {
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
  return token.data;
}

export {
  login
};
