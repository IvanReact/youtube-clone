import React from "react";

import Card from "../card/Card";
import "./style.scss";

function List(props) {
  
  if (!props.data) {
    return null;
  }

  return (
    <main>
      {props.data.map((e) => {
        return <Card setPlayer={props.setPlayer} key={e.id.videoId} item={e} />;
      })}
    </main>
  );
}

export default List;
