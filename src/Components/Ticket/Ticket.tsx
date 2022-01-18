import React from 'react';

const Ticket = () => {
    return (
        <div style={{border: '2px green solid', height: '34%', minWidth: '93%'}}>
            <div style={{
                border: '1px black solid',
                minHeight: '30%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px'
            }}>
                <div>13 400 Р</div>
                <div>S7</div>
            </div>

            <div style={{
                minHeight: '35%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 10px'
            }}>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>MOW-HKT</div>
                    <div>10:45-08:00</div>
                </div>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>В ПУТИ</div>
                    <div>21ч 15м</div>
                </div>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>2 ПЕРЕСАДКИ</div>
                    <div>HKG, JNB</div>
                </div>
            </div>

            <div style={{
                minHeight: '35%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 10px'
            }}>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>MOW-HKT</div>
                    <div>11:20-00:50</div>
                </div>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>В ПУТИ</div>
                    <div>13 30</div>
                </div>
                <div style={{
                    border: '2px red solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <div>1 ПЕРЕСАДКА</div>
                    <div>HKG</div>
                </div>
            </div>



        </div>
    );
};

export default Ticket;