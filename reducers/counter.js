import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + action.amount;
  case DECREMENT_COUNTER:
    return state - action.amount;
  default:
    return state;
  }
}
