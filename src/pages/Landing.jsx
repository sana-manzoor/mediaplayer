import React from 'react'
import { Row,Col,Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {

  const navigatebyUrl=useNavigate()
  const clickNavigate=()=>{
    navigatebyUrl('./home')
  }

  return (
    <div>
      <Row className='pt-5 align-items-center'>
        <Col>
        </Col>
        <Col md='4'>
        <h2 className='mb-3' style={{overflowY:'hidden'}}>Welcome to <span style={{fontSize:'36px',textShadow:' 5px 5px 5px #81B9E3'}}>HEx Media.com</span></h2>
        <p style={{textAlign:'justify'}}>It is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. VLC is available for desktop operating systems and mobile platforms, such as Android, iOS and iPadOS. VLC is also available on digital distribution platforms such as Apple's App Store, Google Play, and Microsoft Store.VLC supports many audio- and video-compression-methods and file-formats, including DVD-Video, Video CD, and streaming-protocols. It is able to stream media over computer networks and can transcode multimedia files.</p><br />
        <button className='btn mb-4 text-light' style={{backgroundColor:'rgb(129, 185, 227)',letterSpacing:'3px'}} onClick={clickNavigate}>Get Started</button>
        </Col>
        <Col>
        </Col>
        <Col md='6'>
          <img className='img-fluid' style={{height:'300px',width:'360px',marginLeft:'60px'}} src="https://openclipart.org/image/800px/211807" alt="" />
        </Col>

      </Row>

      <div className='mb-4 mt-5'>
        <h2 className='text-center mt-5'  style={{overflowY:'hidden'}}>Features</h2>
        <div  className='d-flex mt-4 justify-content-evenly'>

        <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
         <Card.Img variant="top" src="https://i.pinimg.com/originals/28/25/e6/2825e6e29ba05f90e899525c82c0927c.gif" />
         <Card.Body>
        <Card.Title>Simple navigation</Card.Title>
        <Card.Text>
        Videos can be organized by actors, genre, or rating, Windows Media Player can create playlists, You can mix up the songs from different albums in any order in your playlist, then You can save your playlist for future use.
        </Card.Text>
         </Card.Body>
       </Card>

    <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a4/69/28/a469284e8055cfbf8ca1b01a78f109b8.gif" />

      <Card.Body>
        <Card.Title>File compatibility</Card.Title>
        <Card.Text>
        There are different versions of Windows Media Player such as version 11 for Windows XP and Vista and version 12 which comes with Windows 7, It is a highly versatile program that can be used to view videos, listen to music files, and streaming audio such as Internet radio.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='me-5 ms-5 border shadow'>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/82/d7/40/82d74014ea1cad85ca870c92f0e539fd.gif" />
      <Card.Body>
        <Card.Title>Streaming services</Card.Title>
        <Card.Text>
        Later versions of Windows Media Player include access to the Media Guide, You can use the Media Guide to browse a website for music, movies, TV, and Internet radio, It is free for anyone running Windows, and it is the best.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

      </div>

    <div className='border rounded p-5 shadow mx-5 mt-5 mb-5'>
      <Row>
        <Col>
        <h1  style={{overflowY:'hidden'}}>Simple Fast And Powerful</h1>
        <p style={{textAlign:'justify',paddingTop:'5px'}}>It is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. VLC is available for desktop operating systems and mobile platforms, such as Android, iOS and iPadOS. VLC is also available on digital distribution platforms such as Apple's App Store, Google Play, and Microsoft Store.VLC supports many audio- and video-compression-methods and file-formats, including DVD-Video, Video CD, and streaming-protocols. It is able to stream media over computer networks and can transcode multimedia files</p>
        </Col>
        <Col>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-gmrcND7uVo?si=GITDR2gxOJmz10E1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>

    </div>
  )
}

export default Landing