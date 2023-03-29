import React from 'react';

const Player = (val) => {

    return (
        <div>
            <video width="70%" height="40%" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>

     <img src={val.link}></img>
 
        </div>
    )
}

export default Player;

