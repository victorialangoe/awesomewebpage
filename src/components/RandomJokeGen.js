import React from "react";

function RandomJokeGen(){
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    const jokeContainer = document.getElementById("joke");

    let getJoke = () => {
        fetch(url)
        .then(response => response.json())
        .then(item =>{
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        });
    }

    return (
        <div>
            <button id="btn" onClick={getJoke}>Get Joke</button>
            <p id="joke"></p>

        </div>
    );

}



export default RandomJokeGen;