import React, { useState } from "react";
import Character from "./Character";

const initialCharacters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    description: "A friendly and optimistic sea sponge.",
    image:
      "https://static.wikia.nocookie.net/spongebob/images/8/80/SpongeBob_SquarePants.png",
  },
  {
    id: 2,
    name: "Patrick Star",
    description: "SpongeBob's dimwitted but lovable best friend.",
    image:
      "https://static.wikia.nocookie.net/spongebob/images/7/7e/Patrick_Star.png",
  },
  {
    id: 3,
    name: "Squidward Tentacles",
    description: "SpongeBob's grumpy and sarcastic neighbor.",
    image:
      "https://static.wikia.nocookie.net/spongebob/images/0/02/Squidward.png",
  },
];

function App() {
  const [characters, setCharacters] = useState(initialCharacters);

  return (
    <div className="dashboard">
      <Character characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default App;
