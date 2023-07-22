import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Routeur from './components/Router'
function App() {
  return (
   
      <BrowserRouter>
        <Routeur />
      </BrowserRouter>
      
  );
}

export default App;
