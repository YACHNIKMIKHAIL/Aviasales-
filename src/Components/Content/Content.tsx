import React, {useState} from 'react';
import Filter from "../Filter/Filter";
import {TicketContainer} from "../Ticket/TicketContainer";
import Chekeds from "../Checkeds/Chekeds";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {ItemsType, setTicketsAC} from "../Store/TicketReducer";
import {ReducerType} from "../Store/Store";

const Content = () => {
    const dispatch = useDispatch()
    const tickeds = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)

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

    return (
        <ContentCase>
            <Chekeds allCheck={allCheck} nullCheck={nullCheck} oneCheck={oneCheck} twoCheck={twoCheck}
                     threeCheck={threeCheck}/>
            <MainCase>
                <Filter/>
                <TicketContainer filter={filter}/>
                <FiveMoreCase onClick={() => dispatch(setTicketsAC(tickeds))}>
                    Показать еще 5 билетов
                </FiveMoreCase>
            </MainCase>
        </ContentCase>
    );
};

export default Content;
export const ContentCase = styled.div`
  width: 80%;
  display: flex;
  height: 90%;
  justify-content: space-between;
  flex-wrap: wrap
`
export const MainCase = styled.div`
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center
`
export const FiveMoreCase = styled.div`
  position: absolute;
  bottom: 0;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: #2196F3;
  border-radius: 5px;
  padding: 5px;
`