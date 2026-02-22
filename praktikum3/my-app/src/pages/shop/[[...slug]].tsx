import { useRouter } from "next/router";

const halamanToko = () => {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Halaman Toko</h1>
     <p>
        Kategori:{" "}
        {Array.isArray(slug)? slug[0]: slug? slug: "Semua Kategori"}
      </p>
      <p>
        Toko:{" "}{Array.isArray(slug)  ? slug.join("-")  : slug}
      </p>
    </div>
  );
};

export default halamanToko;