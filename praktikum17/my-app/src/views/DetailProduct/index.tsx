import { ProductType } from "../../types/product.type";
import styles from "@/views/DetailProduct/detailProduct.module.scss";
import Image from "next/image";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.produkDetail__title}>Detail Produk</h1>

      <div className={styles.produkDetail}>
        <div className={styles.produkDetail__image}>
          <Image
            src={products.image}
            alt={products.name}
            width={400}
            height={400}
          />
        </div>

        <div className={styles.produkDetail__info}>
          <h1 className={styles.produkDetail__name}>{products.name}</h1>

          <p className={styles.produkDetail__category}>
            {products.category}
          </p>

          <p className={styles.produkDetail__price}>
            Rp {products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;