import React from 'react';
import {HeadCase, OneCase, TicketCase, TwoCase} from "./TicketsStyle";

const Ticket = () => {
    return (
        <TicketCase>
            <HeadCase>
                <div>13 400 Р</div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXE4kpfeoNxf-EHbfduUO8buljuzobWywkQ&usqp=CAU"
                          alt="aircompany logo"
                style={{height:'40px'}}/></div>
            </HeadCase>

            <OneCase>
                <TwoCase>
                    <div>MOW-HKT</div>
                    <div style={{color:'#2196F3'}}>10:45-08:00</div>
                </TwoCase>
                <TwoCase>
                    <div>В ПУТИ</div>
                    <div style={{color:'#2196F3'}}>21ч 15м</div>
                </TwoCase>
                <TwoCase>
                    <div>2 ПЕРЕСАДКИ</div>
                    <div style={{color:'#2196F3'}}>HKG, JNB</div>
                </TwoCase>
            </OneCase>

            <OneCase>
                <TwoCase>
                    <div>MOW-HKT</div>
                    <div style={{color:'#2196F3'}}>11:20-00:50</div>
                </TwoCase>
                <TwoCase>
                    <div>В ПУТИ</div>
                    <div style={{color:'#2196F3'}}>13 30</div>
                </TwoCase>
                <TwoCase>
                    <div>1 ПЕРЕСАДКА</div>
                    <div style={{color:'#2196F3'}}>HKG</div>
                </TwoCase>
            </OneCase>
        </TicketCase>
    );
};

export default Ticket;