import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    // simulasi login
    push("/produk");
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__card}>
        <h1 className={styles.login__title}>Login</h1>

        <div className={styles.login__form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.login__input}
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.login__input}
          />

          <button
            onClick={handleLogin}
            className={styles.login__button}
          >
            Login
          </button>
        </div>

        <p className={styles.login__text}>
          Belum punya akun?
        </p>

        <Link href="/auth/register" className={styles.login__link}>
          Ke Halaman Register
        </Link>
      </div>
    </div>
  );
};

export default TampilanLogin;
