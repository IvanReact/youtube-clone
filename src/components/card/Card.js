import React from 'react';
import './Card.scss';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  startPlayer = () => {
    let player = {
      show: true,
      width: this.props.item.snippet.thumbnails.high.width,
      height: this.props.item.snippet.thumbnails.high.height,
      src: this.props.item.id.videoId
    }
    this.props.setPlayer(player);
  }
  
  render () {
    return (
      <div className='videocontainer'>
        <div className='thumbnailcontainer' onClick={e=>this.startPlayer(e)}>
          <img src={this.props.item.snippet.thumbnails.medium.url} />
        </div>
        <div className='titlecontainer'>
        <h2>{this.props.item.snippet.title}</h2>
        <h5>{this.props.item.snippet.description}</h5>
        </div>
      </div>
    );
  }
}

export default Card;