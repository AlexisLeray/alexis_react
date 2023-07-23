import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Routeur from './components/Router'
import Nav from "./components/Nav"
function App() {
  return (
   
      <BrowserRouter>
      
        <Routeur />
      </BrowserRouter>
      
  );
}

export default App;
