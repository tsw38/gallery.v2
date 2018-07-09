const render = async (props, page) => {
  setTimeout(async () => {
    await props.stateUpdater(page, {
      ...props.state[page],
      render: true
    });
  })
}

const hide = async (props, page) => {
  setTimeout(async () => {
    await props.stateUpdater(page, {
      ...props.state[page],
      render: false
    });
  })
}

export {
  render,
  hide
}
