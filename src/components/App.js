import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../App.css";
import HeaderComponent from "./Header";
import ImageComponent from "./Image";
import { API_KEY, BASE_URL } from "../constants";

function App() {
  const [imgURL, setImage] = useState(null);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const [artist, setArtist] = useState(null);
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImage(res.data.url)
        setArtist(res.data.copyright)
        setTitle(res.data.title)
        setDate(res.data.date)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App">
        <HeaderComponent />
        <ImageComponent imgURL={imgURL} artist={artist} title = {title} date={date}/>
    </div>
  );
}

export default App;
