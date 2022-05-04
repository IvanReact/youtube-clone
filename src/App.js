import { React, useEffect, useState } from "react";

import "./App.scss";

import List from "./components/list/List";
import Header from "./components/header/Header";
import Player from "./components/player/Player";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  const [shouldUpdate, setShouldUpdate] = useState(false);
  function update() {
    setShouldUpdate(!shouldUpdate);
  }

  const [player, setPlayer] = useState({
    src: "",
    width: "",
    height: "",
    show: false,
  });

  const id = "AIzaSyAWI-AMX_aZp2KjAL4Wl1zKgF1f5Nt3hOQ";

  useEffect(() => {
    console.log('yay')
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${id}&maxResults=10&q=${searchQuery}`
    )
      .then((res) => res.json())
      .then((response) => setData(response));
  }, [shouldUpdate]);

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} update={update}/>
      <Player
        show={player.show}
        width={player.width}
        height={player.height}
        src={player.src}
      />
      <List searchQuery={searchQuery} data={data.items} setPlayer={setPlayer} />
    </div>
  );
}

export default App;
