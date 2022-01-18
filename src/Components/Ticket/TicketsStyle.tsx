import styled from "styled-components";

export const TicketCase = styled.div`
  border: 2px #2196F3 solid;
  min-height: 33%; 
  min-width: 100%;
  border-radius: 10px;
`
export const HeadCase = styled.div`
  min-height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color:#2196F3;
  font-size: 30px;
  font-weight: bold;
`
export const OneCase = styled.div`
  min-height: 35%;
  display: flex;
  justify-content: space-between;
  margin: 0 10px
`
export const TwoCase = styled.div`
  color: #071f33;
  min-width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around
`