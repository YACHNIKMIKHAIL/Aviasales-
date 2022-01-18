import React from 'react';
import styled from "styled-components";

const Chekeds = () => {
    return (

        <ChekedsCase>КОЛИЧЕСВО ПЕРЕСАДОК
            <span> <input type="checkbox"/>Все</span>
            <span> <input type="checkbox"/>Без пересадок</span>
            <span> <input type="checkbox"/>1 пересадка</span>
            <span> <input type="checkbox"/>2 пересадки</span>
            <span> <input type="checkbox"/>3 пересадки</span>
        </ChekedsCase>
    );
};

export default Chekeds;

export const ChekedsCase = styled.div`
  border: 2px blue solid;
  min-width: 30%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 10px
`