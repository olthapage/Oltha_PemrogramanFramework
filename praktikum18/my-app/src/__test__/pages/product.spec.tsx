import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import TampilanProduk from "@/pages/produk"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<TampilanProduk />);

    expect(screen.getByTestId("title").textContent).toBe("Daftar Produk");

    expect(page).toMatchSnapshot();
  });
  it("should render container div", () => {
      const { container } = render(<TampilanProduk />);
      expect(container).toBeTruthy(); 
    });

    it("renders multiple times consistently", () => {
      render(<TampilanProduk />);
      render(<TampilanProduk />);
    });

    it("renders title text", () => {
      render(<TampilanProduk />);
      expect(screen.getByText("Daftar Produk")).toBeInTheDocument();
    });

    it("renders title text with toBe", () => {
      render(<TampilanProduk />);
      expect(screen.getByText("Daftar Produk").textContent).toBe(
        "Daftar Produk",
      );
    });

    it("renders title with testId", () => {
      render(<TampilanProduk />);
      expect(screen.getByTestId("title")).toBeInTheDocument();
    });
});