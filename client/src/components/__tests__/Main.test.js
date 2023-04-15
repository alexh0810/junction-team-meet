import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "../../pages/Home";
import Main from "../Main";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("Main is rendered", () => {
  render(<Main />);
  const linkElement = screen.getByTestId("main");
  expect(linkElement).toBeInTheDocument();
});
