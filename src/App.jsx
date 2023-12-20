/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import movies from "./data/movies";

function App() {
  const movieCard = `
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        width: 400px;
        height: 250px;
        flex-shrink: 0;
        color: #181818;
        font-family: Kanit;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 90% */
        display: flex;
        flex-direction: row;
        margin: 32px;`;

  const movieDescription = `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 16px;`;

  const genreStyle = `
        display: flex;
        align-items: center;
        width: max-content;
        height: 6px;
        border-radius: 10px;
        background: #EAAC99;
        color: #000;
        font-family: Kanit;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        padding: 10px;
        margin: 2px`;

  return (
    <div
      className="App"
      css={css`
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h1>Movie List Section</h1>
      {movies.map((i, index) => {
        return (
          <section
            key={index}
            className="movie-list-section"
            css={css`
              ${movieCard}
            `}
          >
            {/* Render Movie Lists Here */}
            <div>
              <img
                src={i.image}
                alt=""
                width={100}
                css={css`
                  margin: 16px 0px 16px 16px;
                `}
              />
            </div>
            <div
              css={css`
                ${movieDescription}
              `}
            >
              <div>Title: {i.title}</div>
              <div>Year: {i.year}</div>
              <div>Runtime: {i.runtime}</div>
              <div
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                `}
              >
                Genres:{" "}
                {i.genres.map((genre, index) => {
                  return (
                    <span
                      key={index}
                      css={css`
                        ${genreStyle}
                      `}
                    >
                      {genre}
                    </span>
                  );
                })}
              </div>
              <div>IMDB Ratings: {i.imdbRating}</div>
              <div>IMDB Votes: {i.imdbVotes}</div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
