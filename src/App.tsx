import React from 'react';
import './App.css';

function App() {
    return (
        <div style={{
            backgroundColor: 'black',
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                backgroundColor: '#F3F7FA',
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                <div style={{
                    height: '20%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div> plain logo</div>
                </div>

                <div style={{
                    width: '80%',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'space-between',
                    flexWrap:'wrap'
                }}>

                    <div style={{
                        border: '2px blue solid', minWidth: '30%', height: '45%', display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-around', alignItems: "flex-start", padding: '0 10px'
                    }}>КОЛИЧЕСВО ПЕРЕСАДОК
                        <span> <input type="checkbox"/>Все</span>
                        <span> <input type="checkbox"/>Без пересадок</span>
                        <span> <input type="checkbox"/>1 пересадка</span>
                        <span> <input type="checkbox"/>2 пересадки</span>
                        <span> <input type="checkbox"/>3 пересадки</span>
                    </div>

                    <div style={{border: '2px purple solid', minWidth: '65%', display:'flex',flexDirection:'column',alignItems:"center"}}>

                        <div style={{
                            border: '2px red solid',
                            minHeight: '10%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            flexWrap:'wrap'
                        }}>
                            <div>Самый дешевый</div>
                            <div>Самый быстрый</div>
                            <div>Оптимальный</div>
                        </div>

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

                        <div style={{border: '2px blue solid',position:'absolute',bottom:'0'}}>
                            <div>
                                Показать еще 5 билетов
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
