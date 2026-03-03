import useSWR from "swr";
import TampilanProduk from "../views/produk";
import fetcher from "../utils/swr/fetcher";

const kategori = () => {
  const { data } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={data?.data || []} />
    </div>
  );
};

export default kategori;