import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return <div className='col-3'>
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>1 May 2023</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='description'>
          merhabalr bu yazıyı şu anlık biraz buraları doldursun diye koyuyorum umarım bir yararı olur gelecekte burayı daha da güzelleştireceğim
        </p>
        <Link className='button' to="">Read More</Link>
      </div>
    </div>
  </div>
}

export default BlogCard