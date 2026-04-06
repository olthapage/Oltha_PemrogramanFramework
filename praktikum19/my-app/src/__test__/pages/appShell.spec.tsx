import { render, screen } from "@testing-library/react";
import AppShell from "@/components/layouts/Appshell";
import "@testing-library/jest-dom";

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: {
      user: {
        name: "User",
        email: "user@test.com",
        role: "admin",
      },
    },
  }),
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

describe("Appshell", () => {
  it("renders appshell with children", () => {
    render(
      <AppShell>
        <div>Test Content</div>
      </AppShell>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});