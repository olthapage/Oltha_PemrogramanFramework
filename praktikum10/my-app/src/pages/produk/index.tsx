import ProdukView from "@/views/produk";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

//const fetcher = (url: string) => fetch(url).then((res) => res.json());
const halamanProduk = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  //console.log("Products:", products);
  //UseEffect(() => {
  //  if (!isLogin) {
  //    push("/auth/login");
  //  }
  //}, []);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, eror, dan isLoading sudah benar
  //console.log("Data:", data);
  //console.log("Error:", error);
  //console.log("IsLoading:", isLoading);

  return (
    <div>
      <ProdukView products={data?.data || []} isLoading={isLoading} />
    </div>
  );
};

export default halamanProduk;