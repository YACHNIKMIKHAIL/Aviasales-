import React from 'react';
import Filter from "../Filter/Filter";
import Ticket from "../Ticket/Ticket";
import Chekeds from "../Checkeds/Chekeds";
import styled from "styled-components";

const Content = () => {
    return (
        <ContentCase>
            <Chekeds/>
            <MainCase>
                <Filter/>
                <Ticket/>

                {/*<div style={{border: '2px blue solid',position:'absolute',bottom:'0'}}>*/}
                {/*    <div>*/}
                {/*        Показать еще 5 билетов*/}
                {/*    </div>*/}
                {/*</div>*/}
            </MainCase>
        </ContentCase>
    );
};

export default Content;
export const ContentCase = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap
`
export const MainCase = styled.div`
  border: 2px purple solid;
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center
`