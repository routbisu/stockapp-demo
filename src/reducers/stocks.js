import { SEARCH_PEERS } from '../actions/types';

const stocksReducer = (state = { peers: [] }, action) => {
  switch (action.type) {
    case SEARCH_PEERS:
      return {
        ...state,
        peers: action.data,
      };

    default:
      return state;
  }
};

export default stocksReducer;
