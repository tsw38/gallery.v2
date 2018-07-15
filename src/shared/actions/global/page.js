const render = async (props, page) => {
  setTimeout(async () => {
    // console.warn('RENDER THIS PAGE', page, props);
    const parentState = props.getParentState(page);

    await props.stateUpdater(page, {
      ...parentState,
      render: true
    });
  },0)
}

const hide = async (props, page) => {
  setTimeout(async () => {
    await props.stateUpdater(page, {
      ...props.state[page],
      render: false
    });
  },0)
}

export {
  render,
  hide
}
