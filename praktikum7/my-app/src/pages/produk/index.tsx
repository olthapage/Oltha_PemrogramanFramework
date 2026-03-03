import useSWR from "swr";
import TampilanProduk from "../views/produk";
import fetcher from "../utils/swr/fetcher";

const ProdukPage = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) return <div>Terjadi kesalahan...</div>;

  return (
    <div>
      <TampilanProduk
        products={data?.data || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProdukPage;