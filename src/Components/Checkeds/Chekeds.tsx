import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";

type ChekedsType={
    allCheck:(e:boolean)=>void
    nullCheck:(e:boolean)=>void
    oneCheck:(e:boolean)=>void
    twoCheck:(e:boolean)=>void
    threeCheck:(e:boolean)=>void
}
const Chekeds = (props:ChekedsType) => {
    const dispatch = useDispatch()

    // const allCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.currentTarget.checked) {
    //         dispatch(setAllTicketsAC())
    //     } else {
    //         console.log('what else?')
    //     }
    // }
    // const nullCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.currentTarget.checked) {
    //         dispatch(setNullTicketsAC())
    //     } else {
    //         console.log('what else?')
    //         dispatch(setAllTicketsAC())
    //     }
    // }
    // const oneCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.currentTarget.checked) {
    //         dispatch(setOneTicketsAC())
    //     } else {
    //         console.log('what else?')
    //         dispatch(setAllTicketsAC())
    //     }
    // }
    // const twoCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.currentTarget.checked) {
    //         dispatch(setTwoTicketsAC())
    //     } else {
    //         console.log('what else?')
    //         dispatch(setAllTicketsAC())
    //     }
    // }
    // const threeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.currentTarget.checked) {
    //         dispatch(setThreeTicketsAC())
    //     } else {
    //         console.log('what else?')
    //         dispatch(setAllTicketsAC())
    //     }
    // }
    return (
        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <Span> <input onChange={(e) => props.allCheck(e.currentTarget.checked)} type="checkbox"/>Все</Span>
            <Span> <input onChange={(e) => props.nullCheck(e.currentTarget.checked)} type="checkbox"/>Без пересадок</Span>
            <Span> <input onChange={(e) => props.oneCheck(e.currentTarget.checked)} type="checkbox"/>1 пересадка</Span>
            <Span> <input onChange={(e) => props.twoCheck(e.currentTarget.checked)} type="checkbox"/>2 пересадки</Span>
            <Span> <input onChange={(e) => props.threeCheck(e.currentTarget.checked)} type="checkbox"/>3 пересадки</Span>
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