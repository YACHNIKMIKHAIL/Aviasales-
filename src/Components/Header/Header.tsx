import React from 'react';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderCase>
            <div> plain logo</div>
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