import React, { useState } from 'react'
import axios from 'axios';
import { useStat, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//const REQUEST_URL = 'http://localhost:8081/create';

function Add() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
        .then(res =>{
            console.log(res);
            navigate("/");
        }).catch(err => console.log(err))
        console.log(name);
    }

  return (
    <div className="container">
        <form action="" onSubmit={handleSubmit}>
            <h2>Add Students</h2>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

            <label htmlFor="name">Email</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <button className='btn'>Submit Information</button>
        </form>
    </div>
  )
}

export default Add