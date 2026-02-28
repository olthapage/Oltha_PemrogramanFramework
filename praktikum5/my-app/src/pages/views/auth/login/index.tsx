import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './login.module.css';
import styles from './login.module.scss';

const TampilanLogin = () => {
    const {push} = useRouter();

    const handleLogin = () => {
        // logic login disini
        push('/produk');
    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      
      <h1 className="text-3xl font-bold text-blue-600">
        Halaman Login
      </h1>

      <button onClick={handleLogin}>
        Login
      </button>

      <h2 className="text-red-600 border border-red-600 rounded-md px-3 py-1">
        Belum punya akun
      </h2>

      <Link
        href="/auth/register"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Ke Halaman Register
      </Link>

    </div>
    );
}

export default TampilanLogin;