import "./discover.css";
import Axios from "axios";
import { useState } from "react";

function Discover() {
  const [search, setSearch] = useState("");
  const [img, setImg] = useState("");
  const [trailer, setTrailer] = useState("");
  const [duration, setDuration] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [popularity, setPopularity] = useState("");
  const [rating, setRating] = useState("");
  const [score, setScore] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [title_english, setTitle_English] = useState("");
  const [title_japanese, setTitle_Japanese] = useState("");
  const [url, setUrl] = useState("");
  const [genre, setGenre] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleEnter(event) {
    if (event.keyCode == 13) {
      handleApi();
    }
  }

  function handleApi() {
    Axios.get(`https://api.jikan.moe/v4/anime?q=${search}&sfw`).then((res) => {
      setImg(res.data.data[0].images.jpg.image_url);
      setTrailer(res.data.data[0].trailer.url);
      setDuration(res.data.data[0].duration);
      setEpisodes(res.data.data[0].episodes);
      setPopularity(res.data.data[0].popularity);
      setRating(res.data.data[0].rating);
      setScore(res.data.data[0].score);
      setStatus(res.data.data[0].status);
      setSource(res.data.data[0].source);
      setTitle_English(res.data.data[0].title_english);
      setTitle_Japanese(res.data.data[0].title_japanese);
      setUrl(res.data.data[0].url);
      setGenre(res.data.data[0].genres[0].name);
    });
  }

  return (
    <div className="discover">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Type Here"
          onChange={handleSearch}
          onKeyDown={handleEnter}
        />
        <button onClick={handleApi}>GENERATE</button>
      </div>

      <div>
        <img src={img} alt="anime img" />
        <p>
          Trailer:{" "}
          <a className="search" href={trailer} target="_blank">
            CLICK HERE
          </a>
        </p>
        <p>Duration: {duration} </p>
        <p>Episodes: {episodes} </p>
        <p>English Title: {title_english}</p>
        <p>Japanese Title: {title_japanese}</p>
        <p>Popularity: {popularity}</p>
        <p> MAL: <a className="search" href={url} target="_blank"> CLICK HERE</a> </p>
        <p>Rating: {rating}</p>
        <p>Genre: {genre}</p>
        <p>Score: {score}</p>
        <p>Status: {status}</p>
        <p>Source: {source}</p>
      </div>
    </div>
  );
}

export default Discover;
