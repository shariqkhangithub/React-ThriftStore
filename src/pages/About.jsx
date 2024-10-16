import React from 'react'
import Navbar from '../components/nav/Navbar'
import shop from './../assets/shop 1.png'
import './about.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='about'>
      <div className='about-main'>
        <div className='ab-one'><img src={shop} alt="" /></div>
        <div className='ab-two'>
          <h1 className='two-h1'>Who We Are?</h1>
          <p className='two-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus aut suscipit quos illo quod, est incidunt. Dolore porro dignissimos voluptas itaque adipisci. Tempore cumque consequuntur facere in ullam, veniam omnis qui placeat quasi iste molestiae mollitia error sequi reprehenderit dolore exercitationem. Quasi praesentium sint dicta facere maiores voluptatum. Error ab veniam libero eaque eius doloribus aspernatur culpa quos explicabo incidunt in odit dolores quisquam amet quo fugit, nulla provident magni illum! Laboriosam, veniam est? Aperiam placeat cum eos, earum dolorem in laboriosam temporibus magnam atque quo quos animi, omnis nesciunt autem fugit cumque incidunt. Dolorum vel porro atque dolor.</p>
        </div>
      </div>
      <div className='about-down'>
        <h2>Dawnload Our App</h2>
      </div>
      </div>
      {/* <h1>About page</h1> */}
    </>
  )
}

export default About