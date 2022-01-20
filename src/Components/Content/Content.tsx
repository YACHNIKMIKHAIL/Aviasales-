import React from 'react';
import Filter from "../Filter/Filter";
import {TicketContainer} from "../Ticket/TicketContainer";
import Chekeds from "../Checkeds/Chekeds";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {ItemsType, StopsType} from "../Store/TicketReducer";
import {ReducerType} from "../Store/Store";

const Content = () => {
    const tickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)
    const stopsState = useSelector<ReducerType, StopsType>(state => state.tickets.stops)
    const forRender: Array<ItemsType> = [];

    tickets.forEach((el) => {
        if (stopsState.all) {
            // if (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0) {
                forRender.push(el)
            // }
        }
        if (stopsState.null) {
            if (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0) {
                forRender.push(el)
            }
        }
        if (stopsState.one) {
            if (el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1) {
                forRender.push(el)
            }
        }
        if (stopsState.two) {
            if (el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2) {
                forRender.push(el)
            }
        }
        if (stopsState.three) {
            if (el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3) {
                forRender.push(el)
            }
        }
    })

    return (
        <ContentCase>
            <Chekeds/>
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