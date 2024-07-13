import { useState } from 'react';
import React from 'react'
import './upload.css';

const Upload = () => {
  

    const [formData, setFormData] = useState({
      Title: '',
      Description: '',
      Video: "",
    })
    const HandleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]:value
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormData({
      Title: '',
      Description: '',
      Video: '',
      
      })
      console.log(formData);
  } 
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
      <h1 className='Upload_form'>Upload Form</h1>
        <label htmlFor="title">Title</label>
        <input type='text' id="title" name="Title" onChange={HandleInputChange}  value={formData.Title} placeholder="Title"/><br/><br/>
        <label htmlFor="description">Description</label>
        <input type='text' id="description" name="Description" value={formData.Description} onChange={HandleInputChange} placeholder= "Description" /> <br/><br/>
        <input type="file" id="video_file" name="Video" value={formData.Video} onChange={HandleInputChange}/>
        <button type="submit" >Upload</button>
      </form>
    </div>
  )

  }
    


export default Upload
