// Archive actions
const initState = (nextState = {}) => {
  return {
    gallery: [],
    render: false,
    ...nextState
  }
};

export {
  initState
}
