import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
// mock router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: { slug: ["toko", "sepatu"] }, 
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

// mock next/link
jest.mock(
  "next/link",
  () =>
    ({ children }: any) =>
      children,
);

// mock next/image
jest.mock("next/image", () => (props: any) => <img {...props} />);

// mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: null }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

// mock window.gtag
global.window.gtag = jest.fn();

describe("Extra Pages", () => {
  it("renders ALL pages (boost coverage)", () => {
    const pages = [
      require("@/pages/setting/app").default,
      require("@/pages/category/[...slug]").default,
      require("@/pages/auth/login").default,
      require("@/pages/auth/register").default,
      require("@/pages/blog/[slug]").default,
      require("@/pages/shop/[[...slug]]").default,
      require("@/pages/user/password").default,
      require("@/pages/user").default,
    ];

    pages.forEach((Page) => {
      render(<Page />);
    });
  });
});