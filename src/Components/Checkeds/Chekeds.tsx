import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {
    setAllTicketsAC,
    setNullTicketsAC,
    setOneTicketsAC,
    setThreeTicketsAC,
    setTwoTicketsAC
} from "../Store/TicketReducer";

const Chekeds = () => {
    const dispatch = useDispatch()

    const allCheck = () => {
        dispatch(setAllTicketsAC())
    }
    const nullCheck = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.checked) {
            dispatch(setNullTicketsAC())
        }else{
            dispatch(setAllTicketsAC())
        }
    }
    const oneCheck = () => {
        dispatch(setOneTicketsAC())
    }
    const twoCheck = () => {
        dispatch(setTwoTicketsAC())
    }
    const threeCheck = () => {
        dispatch(setThreeTicketsAC())
    }
    return (
        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <Span> <input onChange={allCheck} type="checkbox"/>Все</Span>
            <Span> <input onChange={(e)=>nullCheck(e)} type="checkbox"/>Без пересадок</Span>
            <Span> <input onChange={oneCheck} type="checkbox"/>1 пересадка</Span>
            <Span> <input onChange={twoCheck} type="checkbox"/>2 пересадки</Span>
            <Span> <input onChange={threeCheck} type="checkbox"/>3 пересадки</Span>
        </ChekedsCase>
    );
};

export default Chekeds;

export const ChekedsCase = styled.div`
  background-color: #F3F7FA;
  min-width: 30%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 10px;
  border-radius: 10px;
`
const Span = styled.span`
  width: 100%;
  height: 10%;

  &:hover {
    background-color: rgba(33, 150, 243, 0.16);
  }
`