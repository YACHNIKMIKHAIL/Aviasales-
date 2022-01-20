import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setAllAC, setNullAC, setOneAC, setThreeAC, setTwoAC} from "../Store/TicketReducer";

type ChekedsType={
    allCheck:(e:boolean)=>void
    nullCheck:(e:boolean)=>void
    oneCheck:(e:boolean)=>void
    twoCheck:(e:boolean)=>void
    threeCheck:(e:boolean)=>void
}
const Chekeds = (props:ChekedsType) => {
    const dispatch=useDispatch()
    return (
        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <Span> <input onChange={(e) => {
                dispatch(setAllAC())
                // props.allCheck(e.currentTarget.checked)
            }
            } type="checkbox" defaultChecked/>Все</Span>
            <Span> <input onChange={(e) => {
                dispatch(setNullAC())
                // props.nullCheck(e.currentTarget.checked)
            }

            } type="checkbox"/>Без пересадок</Span>
            <Span> <input onChange={(e) => {
                dispatch(setOneAC())
                // props.oneCheck(e.currentTarget.checked)
            }

            } type="checkbox"/>1 пересадка</Span>
            <Span> <input onChange={(e) => {
                dispatch(setTwoAC())
                // props.twoCheck(e.currentTarget.checked)
            }

            } type="checkbox"/>2 пересадки</Span>
            <Span> <input onChange={(e) => {
                dispatch(setThreeAC())
                // props.threeCheck(e.currentTarget.checked)
            }
            } type="checkbox"/>3 пересадки</Span>
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