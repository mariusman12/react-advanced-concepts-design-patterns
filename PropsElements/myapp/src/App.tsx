import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button";
import {Loading} from "./components/icons";

function App() {
  const [isLoading,setIsLoading] = useState(false)
  return (
    <div className="App">
      <Button icon={<Loading/>} />
    </div>
  );
}

export default App;
