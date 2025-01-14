import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from 'redux-persist';

import rootReducer, { RootState } from '../reducers';
import persistConfig from './persistConfig';
// import { onPersistedDataLoaded } from '../actions/user';
// import { validatePostMigrationState } from './validateMigration/validateMigration';

// TODO: Improve type safety by using real Action types instead of `any`
// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pReducer = persistReducer<RootState, any>(persistConfig, rootReducer);

// TODO: Fix the Action type. It's set to `any` now because some of the
// TypeScript reducers have invalid actions
// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any, import/no-mutable-exports
let store: Store<RootState, any>, persistor: Persistor;

const createStoreAndPersistor = async () => {
  // const middlewares = [sagaMiddleware, thunk];

  store = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    preloadedState: undefined,
  });
  // Set the store in the Redux class
  // ReduxService.store = store;

  /**
   * Initialize services after persist is completed
   */
  const onPersistComplete = () => {
    // Signal that persisted data has been loaded
    // store.dispatch(onPersistedDataLoaded());

    // validate the state after migration
    // const currentState = store.getState();
    // validatePostMigrationState(currentState);
  };

  persistor = persistStore(store, null, onPersistComplete);
};

(async () => {
  await createStoreAndPersistor();
})();

export { store, persistor };
