import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// PAGES
import ProdukPage from "@/pages/produk/index";
import ProdukStatic, { getStaticProps } from "@/pages/produk/static";
import ProdukServer, { getServerSideProps } from "@/pages/produk/server";
import { getStaticPaths } from "@/pages/produk/[produk]";

// VIEW
import ProdukView from "@/views/produk";

// MOCK ROUTER
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      isReady: true,
    };
  },
}));

// MOCK FETCH (SSG + SSR)
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [
          {
            id: "1",
            name: "Produk Test",
            price: 10000,
            image: "/test.jpg",
            category: "Test",
          },
        ],
      }),
  }),
) as jest.Mock;

describe("FULL PRODUK TEST 🚀", () => {
  // SNAPSHOT
  it("snapshot produk page", () => {
    const page = render(<ProdukPage />);
    expect(page).toMatchSnapshot();
  });

  // toBe
  it("render container", () => {
    const { container } = render(<ProdukPage />);
    expect(container).toBeTruthy();
  });

  // getByTestId
  it("render title", () => {
    render(<ProdukView products={[]} />);
    expect(screen.getByText("Daftar Produk")).toBeInTheDocument();
  });

  // render produk
  it("render product list", () => {
    render(
      <ProdukView
        products={[
          {
            id: "1",
            name: "Produk Test",
            price: 10000,
            image: "/test.jpg",
            category: "Test",
          },
        ]}
      />,
    );

    expect(screen.getByText("Produk Test")).toBeInTheDocument();
  });

  // loading state
  it("render loading state", () => {
    const { container } = render(<ProdukView products={[]} isLoading={true} />);
    expect(container).toBeTruthy();
  });

  // SSG
  it("getStaticProps works", async () => {
    const result = await getStaticProps();
    expect(result).toHaveProperty("props");
  });

  // SSR
 it("getServerSideProps works", async () => {
   const result = await getServerSideProps(); 
   expect(result).toHaveProperty("props");
 });

  // PATHS
  it("getStaticPaths works", async () => {
    const result = await getStaticPaths();
    expect(result).toHaveProperty("paths");
  });

  // static page render
  it("render static page", () => {
    render(
      <ProdukStatic
        products={[
          {
            id: "1",
            name: "Produk Test",
            price: 10000,
            image: "/test.jpg",
            category: "Test",
          },
        ]}
      />,
    );

    expect(screen.getByText("Halaman Produk Static")).toBeInTheDocument();
  });

  // server page render
  it("render server page", () => {
    render(
      <ProdukServer
        products={[
          {
            id: "1",
            name: "Produk Test",
            price: 10000,
            image: "/test.jpg",
            category: "Test",
          },
        ]}
      />,
    );

    expect(screen.getByText("Halaman Produk Server")).toBeInTheDocument();
  });
});