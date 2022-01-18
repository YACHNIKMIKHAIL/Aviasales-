import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderCase>
            <div><img src="https://media.istockphoto.com/vectors/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-vector-id1258141375?b=1&k=20&m=1258141375&s=612x612&w=0&h=Of69CNJFpZ6JBS5JXtJBF0dM7EmEpXThEARDc9NZewk="
                      alt="logo"
            style={{height:'80px'}}/></div>
        </HeaderCase>
    );
};

export default Header;

export const HeaderCase = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`