import {combineReducers, legacy_createStore} from 'redux';
import {startValueReducer} from './startValue-reducer';
import {maxValueReducer} from './maxValue-reducer';
import {counterReducer} from './counter-reducer';


const rootReducer = combineReducers({
  startValue: startValueReducer,
  maxValue: maxValueReducer,
  count: counterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('app-stateLC')
if(persistedTodosString) {
  preloadedState = JSON.parse(persistedTodosString)
}

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, preloadedState)

store.subscribe( () => {
  localStorage.setItem('app-stateLC', JSON.stringify(store.getState()))
})

