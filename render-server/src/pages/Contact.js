import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Contact = () => {


  return (
    <div className='App'>
        <div className='App-header'>
        <h1>Contact us</h1>
        <section>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quaerat eveniet eligendi provident ea quo sit temporibus dignissimos ipsum, ratione neque fugiat voluptas aliquid, minima enim! Ipsum eius soluta tenetur aliquid magni id amet voluptatem? Dolor voluptatibus magni neque minima accusamus accusantium cumque! Aliquid, quaerat.</p>
            <Link className='App-link' to='/'>Go home</Link>
        </section>
        </div>


    </div>
  )
}

export default Contact