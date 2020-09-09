import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../App.css";

import HeaderComponent from "./Header";
import { API_KEY, BASE_URL } from "../constants";

function App() {
  const [imgURL, setImage] = useState(null);
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImage(res.data.url)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App">
        <HeaderComponent imgURL={imgURL}/>
    </div>
  );
}

export default App;
