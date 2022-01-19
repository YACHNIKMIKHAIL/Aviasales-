import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";
import {InitTicketsType, ItemsType, setTicketsAC} from "../Store/TicketReducer";
import {Dispatch} from "redux";
import axios from "axios";
import Ticked from "./Ticked";
import {initailState} from "../Api/InitState";

type TicketContainerType = {
    filter: Array<number>
}
export const TicketContainer = (props: TicketContainerType) => {
    alert(props.filter)
    let tickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=2yxj1')
            .then(response => {
                console.log(response.data.tickets)
                dispatch(setTicketsAC(response.data.tickets))
            })
            .catch( (error) => {
                alert('error useEffect')
                dispatch(setTicketsAC(initailState.items))
            }  )


    }, [])


    let forRender = tickets
    if (props.filter.includes(0)) {
        forRender = tickets.filter(f => f.segments[0].stops.length === 0 && f.segments[1].stops.length === 0)
    }
    if (props.filter.includes(1)) {
        forRender = tickets.filter(f => f.segments[0].stops.length < 2 && f.segments[1].stops.length < 2
        )
    }
    if (props.filter.includes(2)) {
        forRender = tickets.filter(f => f.segments[0].stops.length < 3 && f.segments[1].stops.length < 3
        )
    }
    if (props.filter.includes(3)) {
        forRender = tickets.filter(f => f.segments[0].stops.length < 4 && f.segments[1].stops.length < 4
        )
    }

    return (
        <div>
            <Ticked tickets={forRender}/>
        </div>
    );
};