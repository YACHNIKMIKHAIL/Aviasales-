import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {ItemsType, setTicketsAC} from "../Store/TicketReducer";
import {Dispatch} from "redux";
import axios from "axios";
import Ticked from "./Ticked";
import {initailState} from "../Api/InitState";

type TicketContainerType = {
    tickets: Array<ItemsType>
}
export const TicketContainer = (props: TicketContainerType) => {
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=30yyr')
            .then(response => {
                console.log(response.data.tickets)
                dispatch(setTicketsAC(response.data.tickets,5))
            })
            .catch((error) => {
                alert('error useEffect')
                console.log(initailState.items)
                dispatch(setTicketsAC(initailState.items,5))
            })


    }, [])





    return (
        <div>
            <Ticked tickets={props.tickets}/>
        </div>
    );
};