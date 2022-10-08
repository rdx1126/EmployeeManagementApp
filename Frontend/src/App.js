import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import { useState } from "react";
import NavBar from './components/NavBar';

function App() {
    const [user,setUser]=useState({role:'no',authToken:''});
    return (
      <>
        {
          user.role=='no'?
            <NavBar/>
            :
            <span/>
        }
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<Auth setUser={setUser}/>} />
         </Routes>
       </BrowserRouter> 
      </>
         
    );
}

export default App;
