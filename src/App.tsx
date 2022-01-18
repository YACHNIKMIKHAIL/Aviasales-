import React from 'react';
import './App.css';

function App() {
    return (
        <div style={{border: '5px blue solid', display:'flex',height:'100vh',flexDirection:'column',alignItems:'center'}}>
            <div style={{border: '2px red solid',height:'10%'}}>logo</div>
            <div style={{border: '5px purple solid',height:'90%',width:'30%',display:'flex',justifyContent:'center'}}>
                <div style={{border: '3px yellow solid',height:'20%',width:'35%'}}>filter</div>
                <div style={{border: '2px red dashed',width:'65%'}}>
                    <div style={{border: '2px red solid',height:'4%'}}>buttons</div>
                    <div style={{border: '2px red solid',height:'16%'}}>5 tickets</div>
                </div>
            </div>
        </div>
    );
}

export default App;
