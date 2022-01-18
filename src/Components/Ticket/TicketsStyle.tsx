import styled from "styled-components";

export const TicketCase = styled.div`
  border: 2px green solid; 
  height: 34%; 
  min-width: 93%
`
export const HeadCase = styled.div`
  border: 1px black solid;
  min-height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px
`
export const OneCase = styled.div`
  min-height: 35%;
  display: flex;
  justify-content: space-between;
  margin: 0 10px
`
export const TwoCase = styled.div`
  border: 2px red solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around
`
export const ChekedsCase = styled.div`
  border: 2px blue solid;
  min-width: 30%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 10px
`