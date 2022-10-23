import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageurl} from '../../constants/Constants'
const RowPost = (props) => {
  const [movies,setMovies]=useState([])
 useEffect(()=>{
  axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
  })
 },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img className={props.issmall ? 'smallposter' : 'poster'} src={`${imageurl+obj.backdrop_path}`}></img>
          )}
            
           




        </div>

    </div>
  )
}

export default RowPost