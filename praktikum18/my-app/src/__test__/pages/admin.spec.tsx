import { render, screen } from "@testing-library/react";
import HalamanAdmin from "@/pages/admin";
import "@testing-library/jest-dom";

describe("Admin Page", () => {
  it("renders admin page", () => {
    render(<HalamanAdmin />);
    expect(screen.getByText("Halaman Admin")).toBeInTheDocument();
  });
});