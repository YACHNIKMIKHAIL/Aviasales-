import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import styled from "styled-components";

function App() {
    return (
        <AppCase>
            <MainCase>
                <Header/>
                <Content/>
            </MainCase>
        </AppCase>
    );
}

export default App;

export const AppCase = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
`
export const MainCase = styled.div`
  min-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`