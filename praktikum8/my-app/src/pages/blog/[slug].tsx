import { useRouter } from "next/router";

const BlogDetailPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>Slug: {query.slug}</p>
    </div>
  );
};

export default BlogDetailPage;
