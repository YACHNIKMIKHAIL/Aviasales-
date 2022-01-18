import React from 'react';
import styled from "styled-components";

const Filter = () => {
    return (
        <FilterCase>
            <ButtonC style={{borderRadius: '10px  0 0 10px '}}>Самый дешевый</ButtonC>
            <ButtonC>Самый быстрый</ButtonC>
            <ButtonC style={{borderRadius: '0 10px  10px 0'}}>Оптимальный</ButtonC>
        </FilterCase>
    );
};

export default Filter;

export const FilterCase = styled.div`
  min-height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin:  0 0 5px 0;
`
export const ButtonC = styled.div`
  background-color: #2196F3;
  color: white;
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`