import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../actions/constants';

const initialState = {};
function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        registering: true,
      };
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export default registrationReducer;
