import {combineReducers, createStore} from "redux";

const Reducer = combineReducers({})

export type ReducerType = ReturnType<typeof Reducer>
export const store = createStore(Reducer)
//@ts-ignore
window.store = store
