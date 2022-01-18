import React from 'react';
import styled from "styled-components";

const Filter = () => {
    return (
        <FilterCase>
            <div>Самый дешевый</div>
            <div>Самый быстрый</div>
            <div>Оптимальный</div>
        </FilterCase>
    );
};

export default Filter;

export const FilterCase = styled.div`
  border: 2px red solid;
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap
`