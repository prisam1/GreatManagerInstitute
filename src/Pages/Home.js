import React,{useState, useEffect} from "react"

import Playlist from '../Playlist';
import Player from "../Player"
import data from "../data"
import "../style/home.css"


const HomePage = () => {
  const [result, setResult] = useState();
   
   useEffect(()=>{
        
     fetch("https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList", {
      method: "GET"  
    })
    .then(res => res.json())
    .then(json => setResult(json));
  },[])

  console.log(JSON.stringify(result))
  return (
    <div className="home">
      <div className="content">
      <div className="right">
       <Player/> 
      </div>
     
     <div className="left">
      <Playlist title={"list"} movie={data["list"]}/>
     </div>

     </div>
    </div>
  );
};

export default HomePage;