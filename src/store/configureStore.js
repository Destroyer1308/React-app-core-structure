import { createStore } from 'easy-peasy';
import models from '../models';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localForage from 'localforage';

const store = createStore(
  models,
  {
    disableImmer: true,
    devTools: process.env.NODE_ENV === 'development',
    reducerEnhancer: reducer => persistReducer({
      key: 'root',
      storage: localForage,
      stateReconciler: autoMergeLevel2
    }, reducer)
  }
);

export const configureStore = () => {
  return store;
};

export const persistor = persistStore(store);

export const getStore = () => store;