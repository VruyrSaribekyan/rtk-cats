import { configureStore, Store } from '@reduxjs/toolkit';
import { categoriesApi } from '../services/catService';
import { setupListeners } from '@reduxjs/toolkit/query'
import { getCatsByCategory } from '../services/catsImages';
import filterByCategories from './reducers/filterByCategories';

const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [getCatsByCategory.reducerPath]:getCatsByCategory.reducer,
    filterByCategories:filterByCategories
  }
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware).concat(getCatsByCategory.middleware),
})


setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store