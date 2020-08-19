import { useRouter } from 'next/router'

export default function Posts({ post }) {
  const router = useRouter()
  console.log("post:", post, router.isFallback);

  // fallback 页面
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>id: {post.id}</p>
    </main>
  );
}
// 构建时执行
export async function getStaticPaths() {
  // 这里为了演示方便，实际上不应该在这里请求api routes
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  // 构建时只会预渲染 paths 内包含的页面
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // fallback=false时paths不包含的页面一律响应404
  
  return { paths, fallback: true };
}

// 构建时执行
export async function getStaticProps({ params }) {
  // 这里为了演示方便，实际上不应该在这里请求api routes
  const res = await fetch(`http://localhost:3000/api/post/${params.id}`);
  const post = await res.json();
  
  return { props: { post } };
}
