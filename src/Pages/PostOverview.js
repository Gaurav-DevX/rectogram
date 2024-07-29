import React from 'react'
import Card from '../components/Card'
import './PostOverview.css'

const PostOverview = () => {
  return (
    <div className='container mt-md-5 post-wrapper'>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <Card />
        </div>

        <div className='col-md-4 mb-4'>
          <Card />
        </div>

        <div className='col-md-4 mb-4'>
          <Card />
        </div>
      </div>
      
    </div>
  )
}

export default PostOverview
