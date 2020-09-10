import React, {useState, useEffect} from "react";
import "../App.css";
import "../Header.css";
import styled, { keyframes } from 'styled-components'
const HeaderDiv = styled.div`
  margin:12px;
  padding:12px;
  background-color: ${pr => pr.theme.white};
  color: ${pr => pr.theme.primaryColor};
  border-radius: 25px;
`
export default function HeaderComponent(props) {
    return (
        <header>
          <HeaderDiv>
          <h1>Nasa Photo Browser</h1>
          </HeaderDiv>
        </header>
    )

}