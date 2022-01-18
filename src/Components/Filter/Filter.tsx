import React from 'react';

const Filter = () => {
    return (
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
    );
};

export default Filter;