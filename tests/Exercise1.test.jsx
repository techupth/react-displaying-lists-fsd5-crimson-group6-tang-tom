import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { expect } from "vitest";
import movies from "../src/data/movies";
import fs from "fs";
import path from "path";

describe("Ex.1 renders movie lists", () => {
  it("renders titles", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.title);
      const movieTitleElement = screen.getByText(regex);
      expect(movieTitleElement).toBeInTheDocument();
    });
  });

  it("renders years", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.year);
      const movieYearElements = screen.getAllByText(regex);
      expect(movieYearElements.length).toBeGreaterThan(0);
    });
  });

  it("renders runtime", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.runtime);
      const movieRunTimeElements = screen.getAllByText(regex);
      expect(movieRunTimeElements.length).toBeGreaterThan(0);
    });
  });

  it("renders directors", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.director);
      const movieRunTimeElements = screen.getAllByText(regex);
      expect(movieRunTimeElements.length).toBeGreaterThan(0);
    });
  });

  it("renders movie images", () => {
    render(<App />);
    movies.forEach((movie, index) => {
      const movieImageElements = screen.getAllByRole("img");
      expect(movieImageElements[index]).toHaveAttribute("src", movie.image);
      // ... Assert other movie properties
    });
  });

  it("renders movies with alt attributes", () => {
    render(<App />);
    const imageElements = screen.getAllByRole("img");
    imageElements.forEach((imageElement) => {
      expect(imageElement).toHaveAttribute("alt");
      expect(imageElement.getAttribute("alt")).toBeTruthy();
    });
  });

  it("renders movie genres", () => {
    render(<App />);
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        const genreElements = screen.getAllByText(genre);
        expect(genreElements.length).toBeGreaterThan(0);
      });
    });
  });

  it("renders imdbRating", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.imdbRating);
      const imdbRatingElements = screen.getAllByText(regex);
      expect(imdbRatingElements.length).toBeGreaterThan(0);
    });
  });

  it("renders imdbVotes", () => {
    render(<App />);
    movies.forEach((movie) => {
      const regex = new RegExp(movie.imdbVotes);
      const imdbVotesElements = screen.getAllByText(regex);
      expect(imdbVotesElements.length).toBeGreaterThan(0);
    });
  });

  it("renders with 'key' in the output (4 times)", () => {
    const exercisePath = path.join(process.cwd(), "src/App.jsx");

    const data = fs.readFileSync(exercisePath, "utf8");

    const matchCount = (data.match(/key/g) || []).length;
    expect(matchCount).toBe(4);
  });
});
