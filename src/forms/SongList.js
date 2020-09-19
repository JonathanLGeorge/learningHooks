import react, { useState } from "React";
import Form from "./Form";
import { v4 as uuidv4, v4 } from "uuid";
const SongList = () => {
  const [songs, setSong] = useState([
    { title: "Bed of razors", id: 1 },
    { title: "Swim", id: 2 },
    { title: "Junk had", id: 3 },
  ]);
  const addSong = () => {
    setSong([...songs, { title: "new song", id: v4() }]);
  };
  return (
    <div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <Form />
    </div>
  );
};

export default SongList;
