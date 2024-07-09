//Agrego componentes
import { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Agrego estilos
import "./styles/app.scss"
//Agrego music data
import data from "./util";


function App() {
  //State
  const [songs, setSongs] = useState(data())
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const[isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying} 
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
