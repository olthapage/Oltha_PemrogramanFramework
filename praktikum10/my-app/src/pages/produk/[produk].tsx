import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";

const HalamanProduk = () => {
  const router = useRouter();
  const { produk } = router.query;

  const { data, error, isLoading } = useSWR( produk ? `/api/produk/${produk}` : null,  fetcher,);

  if (!router.isReady) {
    return <p>Loading router...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data tidak ditemukan</p>;
  }

  return (
    <div>
      <DetailProduk products={data.data} />
    </div>
  );
};

export default HalamanProduk;