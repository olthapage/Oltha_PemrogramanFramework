import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // logic login di sini (simulasi)
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      {/* Navigasi Imperatif */}
      <button onClick={() => handlerLogin()}> Login </button>

      <br /><br />

      {/* Navigasi Deklaratif ke Register */}
      <Link href="/auth/register">
        Ke Halaman Register
      </Link>
    </div>
  );
};

export default HalamanLogin;