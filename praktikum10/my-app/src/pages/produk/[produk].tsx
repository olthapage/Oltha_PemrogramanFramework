import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "../../types/product.type";

const HalamanProduk = ({product}: {product: ProductType}) => {
  // const router = useRouter();
  // const { produk } = router.query;

  // const { data, error, isLoading } = useSWR( produk ? `/api/produk/${produk}` : null,  fetcher,);

  // if (!router.isReady) {
  //   return <p>Loading router...</p>;
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!data || !data.data) {
  //   return <p>Data tidak ditemukan</p>;
  // }

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};


export default HalamanProduk;

//fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
{/*digunakan server-side rendering*/}

// export async function getServerSideProps({ params } : { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
//   const respone = await res.json();
//   // console.log("Data produk yang diambil:", respone);
//   return {
//     props: {
//       product: respone.data,
//     },
//   };
// };

{/digunakan static site generation */}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/produk`);
  const respone = await res.json();

  const paths = respone.data.map((product: ProductType) => ({
    params: { produk: product.id },
  }));
  // console.log("Paths yang dihasilkan:", paths);
  return { paths, fallback: false  };
};

  export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  //const response: ProductType = await res.json();
  const response: { data: ProductType } = await res.json();
  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      product: response.data,
    },
  };
}