import jwt from 'jwt-decode';

const initState = (nextState = {}) => {
  return {
    render: false,
    userName: '',
    password: ''
  }
};

export {
  initState
}
