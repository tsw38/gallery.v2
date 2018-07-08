// Homepage actions
import { GlobalActions } from '../index';
import { Variables } from '../../utils';

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
