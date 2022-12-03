import React from 'react'
import './movielist.scss'

const Movielist = () => {
  return (
    <div className='movielist'>
      <div className="navbar">
        <span className="movie-count">24 Movies</span>
        <div className="sort">
          <span>SORT BY :</span>
          <select name="" id="">
            <option value="">Letest</option>
            <option value="">Populer</option>
            <option value="">Continue watching</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Movielist