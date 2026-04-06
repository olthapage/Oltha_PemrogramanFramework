import { render, screen } from "@testing-library/react";
import HalamanProfile from "@/pages/profile";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        fullname: "Rizky",
      },
    },
  }),
}));

describe("Profile Page", () => {
  it("renders profile page", () => {
    render(<HalamanProfile />);
    expect(screen.getByText(/Rizky/)).toBeInTheDocument();
  });
});