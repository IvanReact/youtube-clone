import React from 'react';
import './Player.scss';

class Player extends React.Component {
  displayClasses = () => {
    return this.props.show ? 'show-iframe': 'hide-iframe';
  }
  render() {
    return (
      <iframe 
        className={this.displayClasses()}
        width={this.props.width} 
        height={this.props.height} 
        src={"https://www.youtube.com/embed/"+this.props.src}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
    );
  }
}

export default Player;