import { IS_LOADING } from '../actions';

export function isLoading(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}