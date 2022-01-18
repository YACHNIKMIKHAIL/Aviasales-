import React from 'react';
import styled from "styled-components";

const Chekeds = () => {
    return (

        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <Span> <input type="checkbox"/>Все</Span>
            <Span> <input type="checkbox"/>Без пересадок</Span>
            <Span> <input type="checkbox"/>1 пересадка</Span>
            <Span> <input type="checkbox"/>2 пересадки</Span>
            <Span> <input type="checkbox"/>3 пересадки</Span>
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