import styles from "./produk.module.css";
import { useRouter } from "next/router";

const MainSection = () => {
  const { push } = useRouter();

  return (
    <section className={styles.main}>
      <div className={styles.card} onClick={() => push("/produk/1")}>
        Produk 1
      </div>

      <div className={styles.card} onClick={() => push("/produk/2")}>
        Produk 2
      </div>

      <div className={styles.card} onClick={() => push("/produk/3")}>
        Produk 3
      </div>
    </section>
  );
};

export default MainSection;