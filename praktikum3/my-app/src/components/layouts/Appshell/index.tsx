import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main>
      <Navbar />

      <div style={{ padding: "20px" }}>
        {children}
      </div>

      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "20px"
        }}
      >
        Oltha Rosyeda - Praktikum Next.js
      </footer>
    </main>
  );
};

export default AppShell;
