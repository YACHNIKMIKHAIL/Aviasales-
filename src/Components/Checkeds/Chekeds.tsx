import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setAllAC, setNullAC, setOneAC, setThreeAC, setTwoAC} from "../Store/TicketReducer";

type ChekedsType = {}
const Chekeds = (props: ChekedsType) => {
    const dispatch = useDispatch()
    return (
        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <label><Span> <input onChange={(e) => {
                dispatch(setAllAC())

            }
            } type="checkbox" defaultChecked/>Все</Span></label>
            <label><Span> <input onChange={(e) => {
                dispatch(setNullAC())
            }

            } type="checkbox"/>Без пересадок</Span></label>
            <label><Span> <input onChange={(e) => {
                dispatch(setOneAC())
            }

            } type="checkbox"/>1 пересадка</Span></label>
            <label><Span> <input onChange={(e) => {
                dispatch(setTwoAC())
            }

            } type="checkbox"/>2 пересадки</Span></label>
            <label><Span> <input onChange={(e) => {
                dispatch(setThreeAC())
            }
            } type="checkbox"/>3 пересадки</Span></label>
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