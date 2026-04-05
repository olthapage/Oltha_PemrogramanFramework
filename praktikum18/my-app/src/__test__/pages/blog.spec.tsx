import { render, screen } from "@testing-library/react";
import Blog from "@/pages/blog";
import "@testing-library/jest-dom";

describe("Blog Page", () => {
  it("renders blog page", () => {
    render(<Blog />);
    expect(screen.getByText("Halaman Blog")).toBeInTheDocument();
  });
});