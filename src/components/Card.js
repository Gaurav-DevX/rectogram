import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div>
      <div className='card shadow-sm'>
        <div className='card-body px-2 py-3'>
            <div className='row'>
                <div className='col-6 d-flex'>
                    <img className="p-2 profile-picture" src='https://images.unsplash.com/photo-1687319000074-90e2048df2f8?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profile-pic'/>
                    <div className='mt-2'>
                      <h6 className='fs-6 fw-medium user'>Title</h6>
                      <p className='location'>Description</p>
                    </div>
                </div>
                <div className='col-6'>
                    <span className='float-end'>
                      <i className="fa-solid fa-ellipsis-vertical fs-4 p-2 mt-2"></i>
                    </span>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className='p-2 post-img img-fluid'></img>
                </div>
            </div>

            <div className='row p-2'>
                <div className='col-6 d-flex justify-content-start'>
                  <div className='d-flex align-items-start justify-content-around float-start'>
                    <i className="fa-regular fa-heart fs-5 m-auto pe-3"></i>
                    <i className="fa-regular fa-comment fs-5 m-auto pe-3"></i>
                    <i className="fa-regular fa-paper-plane fs-5 m-auto pe-3"></i>
                  </div>
                </div>

                <div className='col-6 d-flex justify-content-end'>
                    <span className='fs-6 float-end fw-bold'>100+ Likes</span>
                </div>
            </div>

            <div className='row ps-2 pb-2'>
                <div className='col-12'>
                    <span className='text-muted'>2 hours ago</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
