import { FETCH_DATA } from "../actions/action";

const initialState = {
  news: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        news: action.payload.data,
      };
    default:
      return state;
  }
}
