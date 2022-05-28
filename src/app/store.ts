import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//   import userSlice from '../features/auth/userSlice';
import authModalSlice from '../features/modals/authModalSlice';
//   import cartSlice from '../features/products/cartSlice';
//   import checkoutSlice from '../features/products/checkoutSlice';

const persistConfig = {
  key: 'sagspot',
  version: 1,
  storage,
  blacklist: ['authModal'],
};

const rootReducer = combineReducers({
  authModal: authModalSlice,
  // user: userSlice,
  // cart: cartSlice,
  // checkout: checkoutSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);
export default store;
