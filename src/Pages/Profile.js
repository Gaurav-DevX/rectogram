import React, {useState} from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Modal from 'react-bootstrap/Modal'

const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [uploadPost, setUploadPost] = useState(false);

    const handleUploadPostClose = () => setUploadPost(false);
    const handleUploadPostShow = () => setUploadPost(true);
  return (
    <div className='container rounded shadow-sm bg-white mt-md-3 p-md-5'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
            <img className="dp-picture" src='https://images.unsplash.com/photo-1687319000074-90e2048df2f8?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profile-pic'/>
            <h5 className='ms-3 fs-6 fw-bold mt-4'>Gaurav_Mishra</h5>
            <p className='ms-3 fw-normal'>Gaurav Mishra</p>
            <p className='ms-3 fw-normal'>MERN Full-Stack Developer <a href=''>@gaurav_mishra</a> | Follow <a href='https://www.instagram.com/mishra_gaurav1436/'>@mishra_gaurav1436</a></p>
            <p className='ms-3 fw-normal'>My portfolio on <a href='https://github.com/gap14360'>github.com/gap14360</a></p>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-around mx-auto mb-5'>
                <div className='counter-wrapper px-4 px-md-5 text-center fw-semibold'>
                    <h4>10</h4>
                    <p className='fw-5 text-center'>Posts</p>
                </div>
                
                <div className='counter-wrapper px-4 pe-md-5 text-center fw-semibold'>
                    <h4>20</h4>
                    <p className='fw-5 text-center'>Followers</p>
                </div>
                
                <div className='px-4 ps-md-4 text-center fw-semibold'>
                    <h4>30</h4>
                    <p className='fw-5 text-center'>Following</p>
                </div>
            </div>
            <div className='d-flex justify-content-end align-items-stretch mx-auto mt-md-0 mt-1'>
                <button className='profile-btn profile-btn-white shadow-sm me-3 me-md-4'>
                    <span className='fs-6'>Edit Profile</span>
                </button>
                <button className='profile-btn profile-btn-white shadow-sm' onClick={handleUploadPostShow}>
                    <span className='fs-6'>Upload Post</span>
                </button>
            </div>
        </div>
      </div>

      <div className='row my-3'>
        <div className='col-md-12'>
            <hr />
        </div>
      </div>

      <div className='row'>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>

      </div>

      <div className='row'>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>
        <div className='col-4 card-wrap'>
            <div className='card mb-md-4' onClick={handleShow}>
                <img src='https://images.unsplash.com/photo-1721297015609-1374b1378d31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='post-pic' className=''></img>
            </div>
        </div>

      </div>
      
      
     {/* Modal for edit and delete post */}
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <div id='carouselExampleFade' className='carousel slide carousel-fade'>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src='https://images.unsplash.com/photo-1721548902888-36f759c71727?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='...' className='d-block w-100'/>
                                </div>

                                <div className='carousel-item'>
                                    <img src='https://images.unsplash.com/photo-1721657570081-4100f0deab70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='...' className='d-block w-100'/>
                                </div>

                                <div className='carousel-item'>
                                    <img src='https://images.unsplash.com/photo-1651873052973-7e029c0f13fa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='...' className='d-block w-100'/>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className='card-body px-2'>
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
                                <div className="dropdown-center">
                                    <a className="text-black" href="#" role="" data-bs-toggle="dropdown">
                                        <i className="fa-solid fa-ellipsis fs-4 p-2"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#"><i class="fa-solid fa-pen-to-square pe-2"></i> Edit Post</a></li>
                                        <li><a className="dropdown-item text-danger" href="#"><i class="fa-solid fa-trash pe-2"></i> Delete Post</a></li>
                                    </ul>
                                </div>
                            
                            </span>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <p className='p-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
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
        </Modal.Body>        
      </Modal>

      {/* Modal for upload new post */}
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={uploadPost} onHide={handleUploadPostClose}>
        <Modal.Header closeButton closeVariant='black'>
            <span className='fw-semibold fs-6 text-dark'>Upload Post</span>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-md-6 ps-4 pb-4'>
                    <div className='upload-image-wrap'>
                        <div className='dropZoneContainer'>
                            <input type='file' id='drop-zone' className='fileUpload' accept='.png, .jpg, .gif' onChange="handleFileSelect(this)"/>
                            <div className='dropZoneOverlay'><i className="fa-solid fa-cloud-arrow-up"></i><br />Upload photo from device</div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 ps-4 pe-4 pe-md-5 d-flex flex-column justify-content-between'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="form-floating mb-4">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Add Caption</label>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div class="form-floating mb-4">
                                <input type="location" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput"><i className="fa-solid fa-location-dot"></i> Add Location</label>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-12'>
                            <button className='post-btn post-btn-pink shadow float-end'>
                                <span className='fs-6'>Post</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>        
      </Modal>
    </div>
  )
}

export default Profile
