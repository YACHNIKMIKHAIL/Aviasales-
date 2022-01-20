import React, {useState} from 'react';
import Filter from "../Filter/Filter";
import {TicketContainer} from "../Ticket/TicketContainer";
import Chekeds from "../Checkeds/Chekeds";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {ItemsType, setTicketsAC, StopsType} from "../Store/TicketReducer";
import {ReducerType} from "../Store/Store";

const Content = () => {
    const dispatch = useDispatch()

    const initFilter: Array<number> = []
    const [filter, setFilter] = useState<Array<number>>(initFilter)


    const allCheck = (e: boolean) => {
        if (e) {
            setFilter([5, ...filter])
            console.log(filter)
        } else {
            setFilter(filter.filter(f => f !== 5))
            console.log(filter)
        }
    }
    const nullCheck = (e: boolean) => {
        if (e) {
            setFilter([0, ...filter])
            console.log(filter)
        } else {
            setFilter(filter.filter(f => f !== 0))
            console.log(filter)
        }
    }
    const oneCheck = (e: boolean) => {
        if (e) {
            setFilter([1, ...filter])
            console.log(filter)
        } else {
            setFilter(filter.filter(f => f !== 1))
            console.log(filter)
        }
    }
    const twoCheck = (e: boolean) => {
        if (e) {
            setFilter([2, ...filter])
            console.log(filter)
        } else {
            setFilter(filter.filter(f => f !== 2))
            console.log(filter)
        }
    }
    const threeCheck = (e: boolean) => {
        if (e) {
            setFilter([3, ...filter])
            console.log(filter)
        } else {
            setFilter(filter.filter(f => f !== 3))
            console.log(filter)
        }
    }
    // let tickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)
    // let forRender = tickets
    // if (filter.includes(0)) {
    //     forRender = tickets.filter(f => f.segments[0].stops.length === 0 && f.segments[1].stops.length === 0)
    // }
    // if (filter.includes(1)) {
    //     forRender = tickets.filter(f => f.segments[0].stops.length < 2 && f.segments[1].stops.length < 2
    //     )
    // }
    // if (filter.includes(2)) {
    //     forRender = tickets.filter(f => f.segments[0].stops.length < 3 && f.segments[1].stops.length < 3
    //     )
    // }
    // if (filter.includes(3)) {
    //     forRender = tickets.filter(f => f.segments[0].stops.length < 4 && f.segments[1].stops.length < 4
    //     )
    // }

    const tickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)
    const stopsState = useSelector<ReducerType, StopsType>(state => state.tickets.stops)
    let forRender = tickets
    if (stopsState.null) {
        forRender = tickets.filter(f => f.segments[0].stops.length === 0 && f.segments[1].stops.length === 0)
    }
    if (stopsState.one) {
        forRender = tickets.filter(f => f.segments[0].stops.length === 1 && f.segments[1].stops.length === 1
        )
    }
    if (stopsState.two) {
        forRender = tickets.filter(f => f.segments[0].stops.length === 2 && f.segments[1].stops.length === 2
        )
    }
    if (stopsState.three) {
        forRender = tickets.filter(f => f.segments[0].stops.length === 3 && f.segments[1].stops.length === 3
        )
    }

    return (
        <ContentCase>
            <Chekeds allCheck={allCheck} nullCheck={nullCheck} oneCheck={oneCheck} twoCheck={twoCheck}
                     threeCheck={threeCheck}/>
            <MainCase>
                <Filter/>
                <TicketContainer tickets={forRender}/>
            </MainCase>
        </ContentCase>
    );
};

export default Content;
export const ContentCase = styled.div`
  width: 100%;
  display: flex;
  height: 90%;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const MainCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`