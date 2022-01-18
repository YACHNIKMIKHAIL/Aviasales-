import React from 'react';

const Chekeds = () => {
    return (

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
    );
};

export default Chekeds;