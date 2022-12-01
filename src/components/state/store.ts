import {combineReducers, legacy_createStore} from 'redux';
import {startValueReducer} from './startValue-reducer';
import {maxValueReducer} from './maxValue-reducer';
import {counterReducer} from './counter-reducer';


const rootReducer = combineReducers({
  startValue: startValueReducer,
  maxValue: maxValueReducer,
  count: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)