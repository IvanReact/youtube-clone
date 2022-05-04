import React from 'react';
import './Card.scss';

function Card (props) {

  const startPlayer = () => {
    let player = {
      show: true,
      width: props.item.snippet.thumbnails.high.width,
      height: props.item.snippet.thumbnails.high.height,
      src: props.item.id.videoId
    }
    props.setPlayer(player);
  }
  
    return (
      <div className='videocontainer'>
        <div className='thumbnailcontainer' onClick={e=>startPlayer(e)}>
          <img src={props.item.snippet.thumbnails.medium.url} alt="video" />
        </div>
        <div className='titlecontainer'>
        <h2>{props.item.snippet.title}</h2>
        <h5>{props.item.snippet.description}</h5>
        </div>
      </div>
    );

}

export default Card;