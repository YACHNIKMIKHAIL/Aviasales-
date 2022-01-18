import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

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
                <Header/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
