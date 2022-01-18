import {combineReducers, createStore} from "redux";
import {ticketReducer} from "./TicketReducer";

const Reducer = combineReducers({
    tickets:ticketReducer
})

export type ReducerType = ReturnType<typeof Reducer>
export const store = createStore(Reducer)
//@ts-ignore
window.store = store
