import React, { Component } from 'react';
import './App.css';
export default function AddEmployee() {

    return (
      <div className="employee form">
        <h1>Add Employee Form</h1>    

      <input type="email" placeholder=" Email" ></input>
      <br></br>
      <input type="text" placeholder="Name" ></input>
      <br></br>
      <input type="text" placeholder="Address" ></input>
      <br></br>
      <input type="text" placeholder="Position"></input>
      <button onClick={{}}>Add Employee</button>

      </div>
);
}