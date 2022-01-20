import React, {useState} from 'react';
import styled from "styled-components";
import {FiltersType, setFastsTicketsAC, setOptimalTicketsAC, setPoorTicketsAC} from "../Store/TicketReducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector<ReducerType, FiltersType>(state => state.tickets.filters)
    return (
        <FilterCase>
            <ButtonC
                style={filter.POOR ? {
                    borderRadius: '10px  0 0 10px ',
                    backgroundColor: '#2196F3', color: 'white'
                } : {borderRadius: '10px  0 0 10px '}}
                onClick={() => {
                    dispatch(setPoorTicketsAC())
                }}>Самый дешевый
            </ButtonC>
            <ButtonC
                style={filter.FASTS ? {backgroundColor: '#2196F3', color: 'white'} : {}}
                onClick={() => {
                    dispatch(setFastsTicketsAC())
                }}>Самый быстрый
            </ButtonC>
            <ButtonC
                style={filter.OPTIMAL ? {
                    borderRadius: '0 10px  10px 0 ',
                    backgroundColor: '#2196F3', color: 'white'
                } : {borderRadius: '0 10px  10px 0 '}}
                onClick={() => {
                    dispatch(setOptimalTicketsAC())
                }}>Оптимальный
            </ButtonC>
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