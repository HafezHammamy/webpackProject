import { joke, jokeBtn } from "./dom-loader";
import { v4 as uuidv4 } from "uuid";
import "../styles/main.scss";
import axios from "axios";
import hafez from "../assets/hafez.jpg";

const image = document.getElementById("hafez");
image.src = hafez;

jokeBtn.addEventListener("click", updatejoke);
updatejoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  return res.data.joke;
}

async function updatejoke() {
  joke.textContent = "Loading ...";
  joke.textContent = await generateJoke();
}
