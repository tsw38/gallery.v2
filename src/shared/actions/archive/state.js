// Archive actions
const initState = (nextState = {}) => {
  return {
    gallery: [],
    ...nextState
  }
};

export {
  initState
}
