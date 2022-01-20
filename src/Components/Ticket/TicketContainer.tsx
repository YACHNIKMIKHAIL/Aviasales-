import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FiltersType, ItemsType, setTicketsAC} from "../Store/TicketReducer";
import {Dispatch} from "redux";
import axios from "axios";
import Ticked from "./Ticked";
import {initailState} from "../Api/InitState";
import {ReducerType} from "../Store/Store";

type TicketContainerType = {
    tickets: Array<ItemsType>
}
export const TicketContainer = (props: TicketContainerType) => {
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=3potu')
            .then(response => {
                console.log(response.data.tickets)
                dispatch(setTicketsAC(response.data.tickets))
            })
            .catch((error) => {
                alert('error useEffect')
                console.log(initailState.items)
                dispatch(setTicketsAC(initailState.items))
            })


    }, [])

    const filteredTickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)
    const actualFilter=useSelector<ReducerType,FiltersType>(state=>state.tickets.filters)

    let forRender = filteredTickets
    if (actualFilter.POOR) {
        forRender = filteredTickets.map(m => ({...m})).sort((a, b) => a.price > b.price ? 1 : -1)
    }
    if (actualFilter.FASTS) {
        forRender = filteredTickets.map(m => ({...m})).sort((a, b) => a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)

    }
    if (actualFilter.OPTIMAL) {
        forRender = filteredTickets.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)

    }

    return (
        <div>
            <Ticked tickets={forRender}/>
        </div>
    );
};