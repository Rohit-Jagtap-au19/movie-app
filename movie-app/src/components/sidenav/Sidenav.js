import React from 'react'
import './sidenav.scss'

const Sidenav = () => {
  const genres = ["All", "Action", "Adventure", "Boigraphy", "Comedy", "Crime", "Drama", "History", "Mystery", "Scifi", "Spot", "Thriller"]
  console.log(genres)
  return (
    <div className='sidenav'>
      <h4>Genres</h4>
      <ul>
        {genres.map(category=>{
          return(
          <li key={category}>{category}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidenav