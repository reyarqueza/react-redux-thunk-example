import { HELLO_RESPONSE } from '../actions';

export default function list(state = {}, action) {
  switch (action.type) {
    case HELLO_RESPONSE:
      return action.json;
    default:
      return state;
  }
}