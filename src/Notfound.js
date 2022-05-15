import React from 'react'
import './notfound.css'
import { Link,Route } from 'react-router-dom'
import { Login } from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
const Notfound = () => {

<Route path="/" component={<Home/>} ></Route>
const page_404 = {
    padding:'40px 0',
    background:'#fff',
    color:'#333',
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    fontFamily: "'Arvo', serif"
}
  return (
    <section className="page_404" style={page_404}>
    <div className="container">
      <div className="row">	
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="h2">
                Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
              <Link to="/" className="link_404">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Notfound