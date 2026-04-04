import styles from "../../pages/produk/product.module.scss";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic Import untuk komponen Detail Produk
const DetailProduk = dynamic(() => import("../DetailProduct"), {
  loading: () => <p>Loading detail produk...</p>,
});

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProdukView = ({
  products,
  isLoading = false,
}: {
  products: ProductType[];
  isLoading?: boolean;
}) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={styles.produk__content__skeleton}
              >
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div className={styles.produk__content__skeleton__category}></div>
                <div className={styles.produk__content__skeleton__price}></div>
              </div>
            ))
          : products.map((product: ProductType) => (
              <Link
                href={`/produk/${product.id}`}
                key={product.id}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </div>

                <h2 className={styles.produk__content__item__name}>
                  {product.name}
                </h2>

                <p className={styles.produk__content__item__category}>
                  Kategori: {product.category}
                </p>

                <p className={styles.produk__content__item__price}>
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default ProdukView;