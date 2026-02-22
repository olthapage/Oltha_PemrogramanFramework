import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div>
      <h1>Halaman Register</h1>

      {/* Navigasi Deklaratif balik ke Login */}
      <Link href="/auth/login">
        Ke Halaman Login
      </Link>
    </div>
  );
};

export default HalamanRegister;