import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/redux/counterSlice';
import loginReducer from '../components/redux/loginSlice';
import musicReducer from '../components/redux/musicSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    music: musicReducer,
  }
})