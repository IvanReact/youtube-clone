import React from 'react';
import './Player.scss';

function Player (props) {
  const displayClasses = () => {
    return props.show ? 'show-iframe': 'hide-iframe';
  }

    return (
      <iframe 
        className={displayClasses()}
        width={props.width} 
        height={props.height} 
        src={"https://www.youtube.com/embed/"+props.src}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
    );

}

export default Player;