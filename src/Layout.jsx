import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import { Container } from 'react-bootstrap'

function Layout() {
  return (
    <>
      <Container>
        <div className='bg'>
          <Navbar />
          <Outlet />
        </div>
      </Container>


    </>
  )
}

export default Layout;
