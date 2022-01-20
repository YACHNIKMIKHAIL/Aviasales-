import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAllAC, setNullAC, setOneAC, setThreeAC, setTwoAC, StopsType} from "../Store/TicketReducer";
import {ReducerType} from "../Store/Store";

const Chekeds = () => {
    const dispatch = useDispatch()
    const stops = useSelector<ReducerType, StopsType>(state => state.tickets.stops)
    return (
        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <label>
                <Span>
                    <input onChange={() => {
                        dispatch(setAllAC(!stops.all))
                    }} type="checkbox" checked={stops.all}/>Все
                </Span>
            </label>
            <label>
                <Span>
                    <input onChange={() => {
                        dispatch(setNullAC(!stops.null))
                    }} type="checkbox" checked={stops.null}/>Без пересадок
                </Span>
            </label>
            <label>
                <Span>
                    <input onChange={() => {
                        debugger
                        dispatch(setOneAC(!stops.one))
                    }} type="checkbox" checked={stops.one}/>1 пересадка
                </Span>
            </label>
            <label>
                <Span>
                    <input onChange={() => {
                        dispatch(setTwoAC(!stops.two))
                    }} type="checkbox" checked={stops.two}/>2 пересадки
                </Span>
            </label>
            <label>
                <Span>
                    <input onChange={() => {
                        dispatch(setThreeAC(!stops.three))
                    }} type="checkbox" checked={stops.three}/>3 пересадки
                </Span>
            </label>
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
  margin: 0 0 10px 0;
`
const Span = styled.span`
  width: 100%;
  height: 10%;

  &:hover {
    background-color: rgba(33, 150, 243, 0.16);
  }
`