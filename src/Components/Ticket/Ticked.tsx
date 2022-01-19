import React from 'react';
import {HeadCase, OneCase, TicketCase, TwoCase} from "./TicketsStyle";
import {ItemsType, setTicketsAC} from "../Store/TicketReducer";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";

type TickedType = {
    tickets: Array<ItemsType>
}
const Ticked = (props: TickedType) => {
    const dispatch = useDispatch()
    let tickets = useSelector<ReducerType, Array<ItemsType>>(state => state.tickets.items)

    return (
        <div>
            {props.tickets.map((tmap, i) => {
                return <TicketCase key={i}>
                    <HeadCase>
                        <div>{tmap.price} P</div>
                        <div style={{display: 'flex'}}>
                            {/*<img*/}
                            {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXE4kpfeoNxf-EHbfduUO8buljuzobWywkQ&usqp=CAU"*/}
                            {/*    alt="aircompany logo"*/}
                            {/*    style={{height: '40px'}}/>*/}
                            <div>{tmap.carrier}</div>
                        </div>
                    </HeadCase>

                    {tmap.segments.map((m, i) => {
                        return <OneCase key={i}>
                            <TwoCase>
                                <div>{m.origin}-{m.destination}</div>
                                <div style={{color: '#2196F3'}}>{m.date}</div>
                            </TwoCase>
                            <TwoCase>
                                <div>В ПУТИ</div>
                                <div style={{color: '#2196F3'}}>{m.duration}</div>
                            </TwoCase>
                            <TwoCase>
                                <div>ПЕРЕСАДКИ</div>
                                <div style={{color: '#2196F3'}}>{m.stops.map(s => {
                                    return <>'{s}'</>
                                })}</div>
                            </TwoCase>
                        </OneCase>
                    })}
                </TicketCase>
            })}
            <FiveMoreCase onClick={() => dispatch(setTicketsAC(tickets))}>
                Показать еще 5 билетов
            </FiveMoreCase>
        </div>
    );
};

export default Ticked;
export const FiveMoreCase = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: #2196F3;
  border-radius: 5px;
  padding: 5px;
`