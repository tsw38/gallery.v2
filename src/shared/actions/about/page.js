const ABOUT = 'about';

const render = async (props) => {
  setTimeout(async () => {
    await props.stateUpdater(ABOUT, {
      ...props.state.about,
      render: true
    });
  })
}

const hide = async (props) => {
  setTimeout(async () => {
    await props.stateUpdater(ABOUT, {
      ...props.state.about,
      render: false
    });
  })
}

export {
  render,
  hide
}
