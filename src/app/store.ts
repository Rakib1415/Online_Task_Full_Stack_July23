import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/project/projectSlice';
import resultReducer from '../features/result/resultSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
    result: resultReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
