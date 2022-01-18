import React, {ChangeEvent, useState} from 'react';
import Filter from "../Filter/Filter";
import {TicketContainer} from "../Ticket/TicketContainer";
import Chekeds from "../Checkeds/Chekeds";
import styled from "styled-components";
import {
    setAllTicketsAC,
    setNullTicketsAC,
    setOneTicketsAC,
    setThreeTicketsAC,
    setTwoTicketsAC
} from "../Store/TicketReducer";

const Content = () => {
    const [filter,setFilter]=useState<number>(5)

    const allCheck = (e: boolean) => {
        if (e) {
            setFilter(5)
        } else {
            console.log('what else?')
        }
    }
    const nullCheck = (e: boolean) => {
        if (e) {
            setFilter(0)
        } else {
            console.log('what else?')
            setFilter(5)
        }
    }
    const oneCheck = (e: boolean) => {
        if (e) {
            setFilter(1)
        } else {
            console.log('what else?')
            setFilter(5)
        }
    }
    const twoCheck = (e: boolean) => {
        if (e) {
            setFilter(2)
        } else {
            console.log('what else?')
            setFilter(5)
        }
    }
    const threeCheck = (e: boolean) => {
        if (e) {
            setFilter(3)
        } else {
            console.log('what else?')
            setFilter(5)
        }
    }

    return (
        <ContentCase>
            <Chekeds allCheck={allCheck} nullCheck={nullCheck} oneCheck={oneCheck} twoCheck={twoCheck} threeCheck={threeCheck}/>
            <MainCase>
                <Filter/>
                <TicketContainer filter={filter}/>
                <FiveMoreCase>
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
  position:absolute;
  bottom:0;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color:#2196F3;
  border-radius: 5px;
  padding: 5px;
`