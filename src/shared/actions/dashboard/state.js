const initState = (nextState = {}) => {
  return {
	success: false,
	expiration: -1,
	render: false,
	accessLevel: -1
  }
};

export {
  initState
}
