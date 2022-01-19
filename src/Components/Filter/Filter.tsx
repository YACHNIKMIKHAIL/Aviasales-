import React, {useState} from 'react';
import styled from "styled-components";
import {setFastsTicketsAC, setOptimalTicketsAC, setPoorTicketsAC} from "../Store/TicketReducer";
import {useDispatch} from "react-redux";

const Filter = () => {
    const [f, setF] = useState<string>('poor')
    const dispatch = useDispatch()
    return (
        <FilterCase>
            <ButtonC style={f === 'SET_POOR' ? {
                borderRadius: '10px  0 0 10px ',
                backgroundColor: '#2196F3',color:'white'
            } : {borderRadius: '10px  0 0 10px '}}
                     onClick={() => {
                         dispatch(setPoorTicketsAC())
                         setF('SET_POOR')
                     }}>Самый
                дешевый</ButtonC>
            <ButtonC style={f === 'SET_FASTS' ? {backgroundColor: '#2196F3',color:'white'} : {}}
                     onClick={() => {
                         dispatch(setFastsTicketsAC())
                         setF('SET_FASTS')
                     }}>Самый быстрый</ButtonC>
            <ButtonC style={f === 'SET_OPTIMAL' ? {
                borderRadius: '0 10px  10px 0 ',
                backgroundColor: '#2196F3',color:'white'
            } : {borderRadius: '0 10px  10px 0 '}}
                     onClick={() => {
                         dispatch(setOptimalTicketsAC())
                         setF('SET_OPTIMAL')
                     }}>Оптимальный</ButtonC>
        </FilterCase>
    );
};

export default Filter;

export const FilterCase = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
`
export const ButtonC = styled.div`
  border: 1px #2196F3 solid;
  color: black;
  height: 100%;
  width: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
`