import React from 'react';
import Filter from "../Filter/Filter";
import Ticket from "../Ticket/Ticket";
import Chekeds from "../Checkeds/Chekeds";

const Content = () => {
    return (
        <div style={{
            width: '80%',
            display: 'flex',
            height: '100%',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }}>
            <Chekeds/>

            <div style={{
                border: '2px purple solid',
                minWidth: '65%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center"
            }}>

                <Filter/>
                <Ticket/>

                {/*<div style={{border: '2px blue solid',position:'absolute',bottom:'0'}}>*/}
                {/*    <div>*/}
                {/*        Показать еще 5 билетов*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Content;