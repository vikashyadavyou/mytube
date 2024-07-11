import React from 'react'
import './upload.css';

const upload = () => {
  return (
    <div className='form'>
      <form>
      <h1 className='Upload_form'>Upload Form</h1>
        <label htmlFor="title">Title</label>
        <input id='title' type='text' placeholder='Title'/><br/><br/>
        <label htmlFor="description">Description</label>
        <input type='text' id='description' placeholder='Description'/><br/><br/>
        <input type="file" name="" id="video_file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default upload
