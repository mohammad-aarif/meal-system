import { configureStore } from '@reduxjs/toolkit'
import  profileReducer from './Reducers/profileSlice';

const store = configureStore({
  reducer: {
      profile : profileReducer
  }
})
export default store;