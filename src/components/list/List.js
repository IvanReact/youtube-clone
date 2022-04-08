import React from 'react';
import Card from '../card/Card';
import './List.scss';

class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      searchQuery: this.props.searchQuery
    }
  }

  componentDidUpdate() {
    if (this.state.data !== this.props.data) {
      this.setState({
        data: this.props.data,
        searchQuery: this.props.searchQuery
      });
    }
  }

  render() {
    return (
    <main>
      {this.props.data.map(item=><Card setPlayer={this.props.setPlayer} key={item.id.videoId} item={item}/>)}
    </main>
    );
  }
}

export default List;