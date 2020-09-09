import React, {useState, useEffect} from "react";
import "../App.css";
import "../Header.css";
export default function HeaderComponent(props) {
    return (
        <header>
          <div>
          <h1>Nasa Photo Browser</h1>
          <img src = {props.imgURL}>
          </img>
          </div>
        </header>
    )

}