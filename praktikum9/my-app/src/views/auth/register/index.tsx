import styles from "./register.module.css";

export default function RegisterView() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Register</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Nama" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <button className={styles.button}>Daftar</button>
      </form>
    </div>
  );
}