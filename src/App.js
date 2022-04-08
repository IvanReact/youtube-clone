import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Player from './components/player/Player';
import List from './components/list/List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.id = 'AIzaSyAWI-AMX_aZp2KjAL4Wl1zKgF1f5Nt3hOQ';
    this.url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${this.id}&maxResults=10&q=`; 
    this.state = {
      searchQuery: '',
      data: [],
      player: {
        src: '',
        width: '',
        height: '',
        show: false
      }
    }
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  setPlayer = (player) => {
    this.setState({
      searchQuery: this.state.searchQuery,
      data: this.state.data,
      player: player
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  setSearchQuery = (query) => {
    this.fetchData(query);
  }



  fetchData = (query='') => {
    fetch(this.url+query)
    .then((res)=>res.json())
    .then((response)=> {
      this.setState(
        {
          searchQuery: query,
          data: response.items,
          player: this.state.player
        }
      )
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header handler={this.setSearchQuery} />
        <Player 
          show={this.state.player.show} 
          width={this.state.player.width}
          height={this.state.player.height}
          src={this.state.player.src} />
        <List 
        searchQuery={ this.state.searchQuery } 
        data={ this.state.data } 
        setPlayer={ this.setPlayer } 
        />
      </div>
  );
  }
}

export default App;
