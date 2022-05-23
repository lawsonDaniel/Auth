import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,Route } from 'react-router-dom'
import Header from './components/Header'

const Home = () => {
  return (
    <div>
       <Header/>
       <br></br>
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main className="px-3">
      <h1>Login System</h1>
      <p className="lead">This is a user authentication system built with react and firebase</p>
    </main>
    {/* <footer className="mt-auto text-white-50">
      <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
    </footer> */}
  </div>
</div>

  )
}

export default Home