import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Navbar from "@/components/layouts/navbar"

// mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: "unauthenticated",
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe("Navbar Component", () => {
  it("renders navbar correctly", () => {
    const page = render(<Navbar />)

    expect(screen.getByTestId("navbar")).toBeInTheDocument()

    expect(page).toMatchSnapshot()
  })
})