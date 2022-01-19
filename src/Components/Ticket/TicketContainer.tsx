import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";
import {InitailTicketsType} from "../Store/TicketReducer";
import {Dispatch} from "redux";
import axios from "axios";
import Ticked from "./Ticked";

type TicketContainerType={
    filter:number
}
export  const TicketContainer = (props:TicketContainerType) => {
    let tickets = useSelector<ReducerType, Array<InitailTicketsType>>(state => state.tickets)
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=3v0v0')
            .then(response => {
                console.log(response.data.tickets)
                // dispatch(setTicketsAC(response.data.tickets))
            })
    }, [])


    let forRender=tickets
    if(props.filter===0){
        forRender=tickets.filter(f => f.segments[0].stops.length === 0 && f.segments[1].stops.length === 0)
    }
    if(props.filter===1){
        forRender=tickets.filter(f => f.segments[0].stops.length <2 && f.segments[1].stops.length <2)
    }
    if(props.filter===2){
        forRender=tickets.filter(f => f.segments[0].stops.length <3 && f.segments[1].stops.length <3)
    }
    if(props.filter===3){
        forRender=tickets.filter(f => f.segments[0].stops.length <4 && f.segments[1].stops.length <4)
    }

    return (
        <div>
            <Ticked tickets={forRender}/>
        </div>
    );
};