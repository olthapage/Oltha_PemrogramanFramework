import styles from "../../produk/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  products: ProductType[];
  isLoading: boolean;
};

const TampilanProduk = ({ products, isLoading }: Props) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>

        {/* Skeleton Loading */}
        {isLoading &&
          Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={styles.produk__content__skeleton}
              >
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__category}></div>
                <div className={styles.produk__content__skeleton__price}></div>
              </div>
            ))}

        {/* Data Produk */}
        {!isLoading &&
          products.map((item) => (
            <div
              key={item.id}
              className={`${styles.produk__content__item} ${styles.fadeIn}`}
            >
              <div className={styles.produk__content__item__image}>
                <img src={item.image} alt={item.name} width={200} />
              </div>
              <h4 className={styles.produk__content__item__name}>
                {item.name}
              </h4>
              <p className={styles.produk__content__item__category}>
                {item.category}
              </p>
              <p className={styles.produk__content__item__price}>
                Rp {item.price.toLocaleString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TampilanProduk;