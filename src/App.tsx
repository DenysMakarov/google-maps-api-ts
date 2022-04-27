import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useLoadScript} from "@react-google-maps/api"
import Map from "./cmps/Map";



function App() {
  const API_KEY = "AIzaSyC5KNXkMqCAkjrcqwe3-pSCnEVoCI47n3o"

  const {isLoaded} = useLoadScript({
    googleMapsApiKey : API_KEY,
    libraries: ["places"],

  })

  return (
    <div className="App">

      {
        isLoaded ? <Map/> : <h1>Loading...</h1>
      }

    </div>
  );
}

export default App;
