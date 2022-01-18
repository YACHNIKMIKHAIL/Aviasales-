import React from 'react';
import {HeadCase, OneCase, TicketCase, TwoCase} from "./TicketsStyle";

const Ticket = () => {
    return (
        <TicketCase>
            <HeadCase>
                <div>13 400 Р</div>
                <div>S7</div>
            </HeadCase>

            <OneCase>
                <TwoCase>
                    <div>MOW-HKT</div>
                    <div>10:45-08:00</div>
                </TwoCase>
                <TwoCase>
                    <div>В ПУТИ</div>
                    <div>21ч 15м</div>
                </TwoCase>
                <TwoCase>
                    <div>2 ПЕРЕСАДКИ</div>
                    <div>HKG, JNB</div>
                </TwoCase>
            </OneCase>

            <OneCase>
                <TwoCase>
                    <div>MOW-HKT</div>
                    <div>11:20-00:50</div>
                </TwoCase>
                <TwoCase>
                    <div>В ПУТИ</div>
                    <div>13 30</div>
                </TwoCase>
                <TwoCase>
                    <div>1 ПЕРЕСАДКА</div>
                    <div>HKG</div>
                </TwoCase>
            </OneCase>
        </TicketCase>
    );
};

export default Ticket;