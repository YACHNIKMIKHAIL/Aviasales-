import React from 'react';
import {HeadCase, OneCase, TicketCase, TwoCase} from "./TicketsStyle";
import {useSelector} from "react-redux";
import {ReducerType} from "../Store/Store";
import {InitailTicketsType} from "../Store/TicketReducer";

const Ticket = () => {
    const ticket=useSelector<ReducerType,InitailTicketsType>(state=>state.tickets)
    return (
        <TicketCase>
            <HeadCase>
                <div>{ticket.price} P</div>
                <div style={{display:'flex'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXE4kpfeoNxf-EHbfduUO8buljuzobWywkQ&usqp=CAU"
                          alt="aircompany logo"
                style={{height:'40px'}}/>
                <div>{ticket.carrier}</div>
                </div>
            </HeadCase>

            {ticket.segments.map(m=>{
                return <><OneCase>
                    <TwoCase>
                        <div>{m.origin}-{m.destination}</div>
                        <div style={{color:'#2196F3'}}>{m.date}</div>
                    </TwoCase>
                    <TwoCase>
                        <div>В ПУТИ</div>
                        <div style={{color:'#2196F3'}}>{m.duration}</div>
                    </TwoCase>
                    <TwoCase>
                        <div>ПЕРЕСАДКИ</div>
                        <div style={{color:'#2196F3'}}>{m.stops.map(s=>{
                            return <>'{s}'</>
                        })}</div>
                    </TwoCase>
                </OneCase>
                {/*<OneCase>*/}
                {/*    <TwoCase>*/}
                {/*        <div>MOW-HKT</div>*/}
                {/*        <div style={{color:'#2196F3'}}>11:20-00:50</div>*/}
                {/*    </TwoCase>*/}
                {/*    <TwoCase>*/}
                {/*        <div>В ПУТИ</div>*/}
                {/*        <div style={{color:'#2196F3'}}>13 30</div>*/}
                {/*    </TwoCase>*/}
                {/*    <TwoCase>*/}
                {/*        <div>1 ПЕРЕСАДКА</div>*/}
                {/*        <div style={{color:'#2196F3'}}>HKG</div>*/}
                {/*    </TwoCase>*/}
                {/*</OneCase>*/}
                </>
            })}

            {/*<OneCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>MOW-HKT</div>*/}
            {/*        <div style={{color:'#2196F3'}}>10:45-08:00</div>*/}
            {/*    </TwoCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>В ПУТИ</div>*/}
            {/*        <div style={{color:'#2196F3'}}>21ч 15м</div>*/}
            {/*    </TwoCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>2 ПЕРЕСАДКИ</div>*/}
            {/*        <div style={{color:'#2196F3'}}>HKG, JNB</div>*/}
            {/*    </TwoCase>*/}
            {/*</OneCase>*/}

            {/*<OneCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>MOW-HKT</div>*/}
            {/*        <div style={{color:'#2196F3'}}>11:20-00:50</div>*/}
            {/*    </TwoCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>В ПУТИ</div>*/}
            {/*        <div style={{color:'#2196F3'}}>13 30</div>*/}
            {/*    </TwoCase>*/}
            {/*    <TwoCase>*/}
            {/*        <div>1 ПЕРЕСАДКА</div>*/}
            {/*        <div style={{color:'#2196F3'}}>HKG</div>*/}
            {/*    </TwoCase>*/}
            {/*</OneCase>*/}
        </TicketCase>
    );
};

export default Ticket;