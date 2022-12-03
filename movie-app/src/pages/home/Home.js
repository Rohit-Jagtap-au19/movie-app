import React from 'react'
import './home.scss'
import {BsSearch} from 'react-icons/bs'
import Sidenav from '../../components/sidenav/Sidenav'
import Movielist from '../../components/movielist/Movielist'

const Home = () => {
  return (
    <div className='home'>
        <div className="search">
        <BsSearch className='icon'/>
            <input type="text" placeholder='Search..'/>
        </div>
        <div className="movie-container">
            <Sidenav/>
            <Movielist/>
        </div>
    </div>
  )
}

export default Home