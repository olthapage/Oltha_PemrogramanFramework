import { render, screen } from "@testing-library/react";
import EditorPage from "@/pages/editor";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        name: "Editor",
        email: "editor@test.com",
        role: "editor",
      },
    },
  }),
}));

describe("Editor Page", () => {
  it("renders editor page", () => {
    render(<EditorPage />);
    expect(screen.getByText("Halaman Editor")).toBeInTheDocument();
  });
});