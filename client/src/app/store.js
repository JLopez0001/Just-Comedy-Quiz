import { configureStore } from '@reduxjs/toolkit'
import topComedianReducer from '../features/topComedianSlice'

export const store = configureStore({
  reducer: {
    topComedians: topComedianReducer
  },
})