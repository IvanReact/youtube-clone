import React from "react";
import './Header.scss';
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      query: ""
    }
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  onClick() {
    let handler = this.props.handler;
    handler(this.state.query)
  };

  render() {
    return (
      <header>
        <h1>YT CLONE</h1>
        <div>
            <input type="text" name="" id="searchInput" placeholder="type to search..." onChange={(e)=>this.onChange(e) } />
            <button onClick={()=>this.onClick()}>Search</button>
        </div>
      </header>
    );
  }
}

export default Header;