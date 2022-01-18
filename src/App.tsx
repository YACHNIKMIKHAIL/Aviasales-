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
                    border: '1px black solid',
                    height: '20%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div> plain logo</div>
                </div>

                <div style={{
                    border: '4px red solid',
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

                    <div style={{border: '2px purple solid', width: '65%', display:'flex',flexDirection:'column',alignItems:"center"}}>

                        <div style={{
                            border: '2px red solid',
                            height: '10%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            <div>Самый дешевый</div>
                            <div>Самый быстрый</div>
                            <div>Оптимальный</div>
                        </div>

                        <div style={{border: '2px green solid', height: '34%', width: '93%'}}>
                            <div style={{
                                border: '1px black solid',
                                height: '30%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 10px'
                            }}>
                                <div>13 400 Р</div>
                                <div>S7</div>
                            </div>

                            <div style={{
                                height: '35%',
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
                                    <span>MOW-HKT</span>
                                    <span>10:45-08:00</span>
                                </div>
                                <div style={{
                                    border: '2px red solid',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around'
                                }}>
                                    <span>В ПУТИ</span>
                                    <span>21ч 15м</span>
                                </div>
                                <div style={{
                                    border: '2px red solid',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around'
                                }}>
                                    <span>2 ПЕРЕСАДКИ</span>
                                    <span>HKG, JNB</span>
                                </div>
                            </div>

                            <div style={{
                                height: '35%',
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
                                    <span>MOW-HKT</span>
                                    <span>11:20-00:50</span>
                                </div>
                                <div style={{
                                    border: '2px red solid',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around'
                                }}>
                                    <span>В ПУТИ</span>
                                    <span>13 30</span>
                                </div>
                                <div style={{
                                    border: '2px red solid',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around'
                                }}>
                                    <span>1 ПЕРЕСАДКА</span>
                                    <span>HKG</span>
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
