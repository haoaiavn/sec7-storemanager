import authReducer from './auth';
import { combineReducers } from 'redux';
import orderDetailReducer from './orderDetail';
import orderListReducer from './orderList';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  authReducer,
  registrationReducer,
  orderList: orderListReducer,
  orderDetail: orderDetailReducer,
});

export default rootReducer;
