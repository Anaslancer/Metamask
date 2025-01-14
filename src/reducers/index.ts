import { combineReducers, Reducer } from 'redux';

import privacyReducer from './privacy';
import userReducer, { UserState } from './user';
import { EngineState } from '../core/Engine';
import engineReducer from '@/src/core/redux/slices/engine';

/**
 * Infer state from a reducer
 *
 * @template reducer A reducer function
 */
export type StateFromReducer<reducer> = reducer extends Reducer<
  infer State,
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>
  ? State
  : never;

// TODO: Convert all reducers to valid TypeScript Redux reducers, and add them
// to this type. Once that is complete, we can automatically generate this type
// using the `StateFromReducersMapObject` type from redux.
export interface RootState {
  engine: { backgroundState: EngineState };
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  privacy: any;
  user: UserState;
}

// TODO: Fix the Action type. It's set to `any` now because some of the
// TypeScript reducers have invalid actions
// TODO: Replace "any" with type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = combineReducers<RootState, any>({
  engine: engineReducer as any,
  privacy: privacyReducer,
  user: userReducer,
});

export default rootReducer;
