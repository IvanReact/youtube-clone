import React from "react";
import './stlye.scss';

function Header (props) {

    return (
      <header>
        <h1>YT CLONE</h1>
        <div>
            <input type="text" name="" id="searchInput" placeholder="type to search..." onChange={(e)=>props.setSearchQuery(e.target.value) } />
            <button onClick={()=>props.update()}>Search</button>
        </div>
      </header>
    );

}

export default Header;