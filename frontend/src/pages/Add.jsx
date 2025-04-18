import React, { useState } from 'react'
import { useStat, useEffect } from 'react'

function Add() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
    }

  return (
    <div className="container">
        <form action="">
            <h2>Add Students</h2>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

            <label htmlFor="name">Email</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <button className='btn' onClick={handleSubmit}>Submit Information</button>
        </form>
    </div>
  )
}

export default Add