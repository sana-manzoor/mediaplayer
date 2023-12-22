import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar style={{backgroundColor:'rgb(129, 185, 227)',paddingTop:'18px'}}>
        <Container>
        <Link to={'./'} style={{textDecoration:'none'}}> 
          <Navbar.Brand >
          {/* <i className="fa-solid fa-arrow-up-from-bracket fa-flip fa-xl me-3" style={{color: '#223659;'}}></i> */}
          <i className="fa-solid fa-upload fa-bounce fa-l me-3" style={{color:'#223659;',fontSize:'30px'}}></i>
            {' '}
             <span style={{fontSize:'30px'}} >HExMedia</span>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header