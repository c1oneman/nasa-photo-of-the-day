import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components'


const ImageDiv = styled.div`
  background-color: ${pr => pr.theme.white};
  border-radius: 25px;
  margin:12px;
  padding:12px;
  transition: all 0.3s ease-in-out;
`

export default function HeaderComponent(props) {
    return (
        <header>
          <ImageDiv>
              <img src={props.imgURL}/>
                <h2>{props.artist} | {[props.title]}</h2><h3>{props.date}</h3>
          </ImageDiv>
        </header>
    )

}