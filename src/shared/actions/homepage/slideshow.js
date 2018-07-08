// Homepage actions
import { GlobalActions } from '../index';
import { Variables } from '../../utils';

const HOMEPAGE = 'homepage';

const start = async (props) => {
  const shuffled                = GlobalActions.shuffle(props.state.homepage.images);
  const initialBackgroundImages = shuffled.slice(0,2);

  await props.stateUpdater(HOMEPAGE, {
    ...props.state.homepage,
    images: shuffled,
    background: initialBackgroundImages,
    active: 0,
    timer: setInterval(() => {
      changeImage(props);
    }, 9500)
  });
};

const changeImage = async (props) => {
  const parentState = await props.getParentState(HOMEPAGE);
  let {
    images,
    background,
    active,
    previousIndex
  } = parentState;

  const nextImageIndex       = GlobalActions.randomHelper.getRandomNumber(images.length, previousIndex);
  const nextActiveBackground = active ? 0 : 1;
  const nextImage            = images[nextImageIndex];
  let nextBackground         = [...background];
  nextBackground[active]     = nextImage;

  //update the active & pending indices
  await props.stateUpdater(HOMEPAGE, {
    ...parentState,
    active: nextActiveBackground,
    pending: active,
    previousIndex: nextImageIndex
  });

  // next update pending again, and get new background for the non active index
  setTimeout(async () => {
    const updatedParentState = await props.getParentState(HOMEPAGE);

    await props.stateUpdater(HOMEPAGE, {
      ...updatedParentState,
      background: nextBackground,
      pending: false
    })
  }, 1000);

}

const stop = async (props) => {
  const parentState = await props.getParentState(HOMEPAGE);

  await props.stateUpdater(HOMEPAGE, {
    ...parentState,
    timer: clearInterval(parentState.timer)
  });
}

export {
  start,
  stop
}
