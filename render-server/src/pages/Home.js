import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'




const Home = () => {
 
  return (
    <div className='App'>
        <header className='App-header'>
        <h1>Welcome to home page 1 </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia, esse ipsa suscipit ad quos eligendi cupiditate dolores molestiae consequuntur distinctio sequi. Hic numquam sequi ipsa quis recusandae dolorum quibusdam?</p>
        <Link className='App-link' to='/contact'>Go to contact page</Link>
        </header>
    </div>
  )
}

export default Home