import withAuth from "@/Middleware/withAuth";

//mock next/server
jest.mock("next/server", () => ({
  NextResponse: {
    redirect: jest.fn(() => "redirected"),
  },
}));

//mock next-auth
jest.mock("next-auth/jwt", () => ({
  getToken: jest.fn(),
}));

describe("withAuth", () => {
  it("should call middleware when no auth required", async () => {
    const middleware = jest.fn();
    const wrapped = withAuth(middleware);
    const req: any = {
      nextUrl: { pathname: "/" },
      url: "http://localhost:3000",
    };
    await wrapped(req, {} as any);
    expect(middleware).toHaveBeenCalled();
  });
});