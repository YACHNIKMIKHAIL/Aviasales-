import React, {useEffect} from 'react';
import {HeadCase, OneCase, TicketCase, TwoCase} from "./TicketsStyle";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";
import {InitailTicketsType} from "../Store/TicketReducer";
import {Dispatch} from "redux";
import axios from "axios";

const TicketContainer = () => {
    let tickets = useSelector<ReducerType, Array<InitailTicketsType>>(state => state.tickets)
    const dispatch = useDispatch<Dispatch>()

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=3v0v0')
            .then(response => {
                console.log(response.data.tickets)
                // dispatch(setTicketsAC(response.data.tickets))
            })

    }, [])

    return (
        <div>
            {tickets.map((tmap, i) => {
                return <TicketCase key={i}>
                    <HeadCase>
                    <div>{tmap.price} P</div>
                    <div style={{display: 'flex'}}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXE4kpfeoNxf-EHbfduUO8buljuzobWywkQ&usqp=CAU"
                            alt="aircompany logo"
                            style={{height: '40px'}}/>
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
        </div>
    );
};

export default TicketContainer;