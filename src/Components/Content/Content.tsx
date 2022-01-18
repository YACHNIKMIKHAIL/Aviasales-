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

                <FiveMoreCase>
                        Показать еще 5 билетов
                </FiveMoreCase>
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
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center
`
export const FiveMoreCase = styled.div`
  position:absolute;
  bottom:0;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color:#2196F3;
  border-radius: 5px;
  padding: 5px;
`