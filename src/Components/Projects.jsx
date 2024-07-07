import React from 'react'


function Projects() {
  return (
    <>
      <div>
        <h1 align="center">Projects</h1>
        <div className='project'>
          <div className='project1 bg-dark text-light' data-aos="flip-right"
            data-aos-duration="1000">
            <img src="https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg" alt="" />
            <h4>React E-Commerce</h4>
            <p>This is a project made with complete React js.</p>
            <a href="https://www.google.com" className='btn btn-warning'> demo</a>
           <a href="https://www.github.com" className='btn btn-primary' style={{marginLeft:"10px"}}> Code</a>
          </div>
          <div className='project1 bg-dark text-light' data-aos="flip-right"
            data-aos-duration="1000">
            <img src="https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg" alt="" />
            <h4>Student Management</h4>
            <p>This is a project made with complete React js.</p>
            <a href="https://www.google.com" className='btn btn-warning'> demo</a>
           <a href="https://www.github.com" className='btn btn-primary' style={{marginLeft:"10px"}}> Code</a>
          </div>
          <div className='project1 bg-dark text-light' data-aos="flip-right"
            data-aos-duration="1000">
            <img src="https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg" alt="" />
            <h4>React Firebase</h4>
            <p>This is a project made with complete React js.</p>
            <a href="https://www.google.com" className='btn btn-warning'> demo</a>
           <a href="https://www.github.com" className='btn btn-primary' style={{marginLeft:"10px"}}> Code</a>
           
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects
