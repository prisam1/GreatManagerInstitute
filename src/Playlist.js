import React from 'react'
import data from "../src/data"
import "../src/style/playlist.css"

export default function Playlist() {
 
 
function ele(val){

    return(
        <>    
       
       <div key={val.id}><img src={val.link} className="image" alt="thumb"/> <h4>{val.name}</h4></div> 
       
        </>
    )}
  return (
    <> 
      
   <div className='poster'>     
  
   { 
   <div className='caraousal'> 
  { data.map((ele))}
   </div>
   }  
   </div>
   
   
    </>
  )}
