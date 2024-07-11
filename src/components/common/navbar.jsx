import React from 'react';
import './css/navbar.css'
import upload from '../pages/upload';

const navbar=()=>{
    return(
        <div className='navbar'>
            <h1>My Tube</h1>
            <h2 onClick={upload}>Upload Video</h2>
        
            
        </div>
    )
}

export default navbar