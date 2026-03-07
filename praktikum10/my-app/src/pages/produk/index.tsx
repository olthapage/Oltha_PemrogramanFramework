import ProdukView from "../../views/produk";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const halamanProduk = () => {
  const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
    return (
      <div>
        <ProdukView products={data?.data || []} isLoading={isLoading} />
      </div>
    );
};

export default halamanProduk;