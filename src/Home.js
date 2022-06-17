import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,Route } from 'react-router-dom'
import Header from './components/Header'

const Home = () => {
  const progres = [10,20,30,40,50,60,70,80,90,100]
  const active = []
  const cal = (value)=>{
    // console.log(value)
  let max = progres[progres.length-1]
  let rem =max - value
  // console.log(rem)

  for(let i=0;i<=progres.length;i++){
    // console.log(progres[i])
    let comp = progres[i]
    if(rem === comp){
    let de = comp+10
    let index = progres.indexOf(de)
    for(let i =0;i<index;i++){
     let rem = progres[i]
     active.push(rem)
    if(active.length >= index)
    active.length = 0
     console.log(active)
    }
    }

  }

  }
 
  return (
    <div>
       <Header/>
       <br></br>
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main className="px-3">
      <h1>Login System</h1>
      {
        progres.map((btn)=>{
          return(
            <button key={btn} onClick={()=>{
            return  cal(btn)
            }}>{btn}</button>
          )
        })
      }
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