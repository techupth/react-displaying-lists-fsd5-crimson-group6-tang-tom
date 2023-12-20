import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { expect } from "vitest";
import teams from "../src/data/teams";

// ไม่ต้องทำ Exercise 2
describe.skip("renders team lists", () => {
  it("renders team names", () => {
    render(<App />);
    teams.forEach((team) => {
      const regex = new RegExp(`${team.name} Team`);
      const teamNameElement = screen.getByText(regex);
      expect(teamNameElement).toBeInTheDocument();
    });
  });

  it("renders team id", () => {
    render(<App />);
    teams.forEach((team) => {
      const regex = new RegExp(`(${team.id})`);
      const teamIdElement = screen.getByText(regex);
      expect(teamIdElement).toBeInTheDocument();
    });
  });

  it("render child name", () => {
    render(<App />);
    teams.forEach((team) => {
      team.children.forEach((child) => {
        const regex = new RegExp(`${child.name} Team`);
        const childNameElement = screen.getByText(regex);
        expect(childNameElement).toBeInTheDocument();
      });
    });
  });

  it("render child id", () => {
    render(<App />);
    teams.forEach((team) => {
      team.children.forEach((child) => {
        const regex = new RegExp(`(${child.id})`);
        const childIdElement = screen.getByText(regex);
        expect(childIdElement).toBeInTheDocument();
      });
    });
  });
});
