import Navbar from "./Navbar";
import Card from "./Card";
import Counter from "./Counter";
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
function App() {
  const [animes, setAnimes] = useState([]);
  const [term, setTerm] = useState("naruto");

  const getAnime = async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    const data = await response.json();
    setAnimes(data.data);
  };

  useEffect(() => {
    getAnime("naruto");
  }, []);

  return (
    <>
      <h1> Anime Search</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search for an Anime: "
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => getAnime(term)}> Search</button>
      </div>

      <div className="container">
        {animes?.length > 0 ? (
          animes.map((anime, index) => <AnimeCard key={index} anime={anime} />)
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </>
  );
}

export default App;
