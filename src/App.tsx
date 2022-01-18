import React from 'react';
import './App.css';
import {
    AppCase,
    ECase,
    FilterCase,
    HeaderCase,
    LogoCase, MCase, MOCase, MOWCase, NCase,
    OCase,
    OneCase,
    S7Case,
    TabsCase,
    TCase,
    TCASE,
    TiCase,
    TickedCase,
    TimeCase
} from './Components/Styles';

function App() {
    return (
        <AppCase>
            <LogoCase>plain logo</LogoCase>
            {/*<div>*/}
                <FilterCase>
                    Количество пересадок
                    <span><input type="checkbox"/>Все</span>
                    <span><input type="checkbox"/>Без пересадок</span>
                    <span><input type="checkbox"/>1 пересадка</span>
                    <span><input type="checkbox"/>2 пересадки</span>
                    <span><input type="checkbox"/>3 пересадки</span>
                </FilterCase>
                {/*<div>*/}
                    <TabsCase>
                        <div>Самый дешевый</div>
                        <div>Самый быстрый</div>
                    </TabsCase>
                    <TickedCase>
                        <div style={{height:'40%',display:'flex',alignItems:'center'}}>
                        <HeaderCase>
                            <TCASE>13 400 P</TCASE>
                            <S7Case> S7 Airlines</S7Case>
                        </HeaderCase>
                        </div>
                        <div style={{height:'50%',display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                        <OneCase>
                            <OCase>
                                <MOWCase>MOW-HKT</MOWCase>
                                <TimeCase>10:45-08:00</TimeCase>
                            </OCase>
                            <NCase>
                                <MOCase>В ПУТИ</MOCase>
                                <TiCase>21ч 15м</TiCase>
                            </NCase>
                            <ECase>
                                <MCase>2 ПЕРЕСАДКИ</MCase>
                                <TCase>HKG, JNB</TCase>
                            </ECase>
                        </OneCase>

                            <OneCase>
                                <OCase>
                                    <MOWCase>MOW-HKT</MOWCase>
                                    <TimeCase>11:20-00:50</TimeCase>
                                </OCase>
                                <NCase>
                                    <MOCase>В ПУТИ</MOCase>
                                    <TiCase>13ч 30м</TiCase>
                                </NCase>
                                <ECase>
                                    <MCase>1 ПЕРЕСАДКИ</MCase>
                                    <TCase>HKG</TCase>
                                </ECase>
                            </OneCase>
                        </div>
                        {/*<div>*/}
                        {/*    <div>*/}

                        {/*        <span>MOW-HKT</span>*/}
                        {/*        <span>11:20-00:50</span>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}

                        {/*        <span>В ПУТИ</span>*/}
                        {/*        <span>13ч 30м</span>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}

                        {/*        <span>1 ПЕРЕСАДКА</span>*/}
                        {/*        <span>HKG</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </TickedCase>
            {/*    </div>*/}
            {/*</div>*/}
        </AppCase>
    );
}

export default App;
