// Homepage actions
const initState = (nextState = {}) => {
  return {
    timer: null,
    background: ["", ""],
    images: [],
    active: false,
    pending:false,
    previousIndex: 0,
    ...nextState
  }
};

export {
  initState
}
