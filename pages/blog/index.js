/**
 * 1. yarn dev 启动 dev server（保持api可以在build期间访问）
 * 2. yarn build 有打印posts（证明页面渲染）
 * 3. stop dev server (避免端口冲突)
 * 4. yarn start 启动 prod server (服务端没有打印post)
 * 5. .next/server/pages/blog.html 预渲染html
 * 6. .next/server/pages/blog.json 渲染数据
 */
function Blog({ posts }) {
  console.log('posts:', posts)
  return (
    <main>
      <h1>博客列表：</h1>
      <p>使用 getStaticProps 静态生成</p>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  // 这里为了演示方便，实际上不应该在这里请求api routes，可以直接在这里写服务端代码
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  // 返回数据 { props: posts }, 构建时，Blog组件会从props中取到posts数据
  return {
    props: {
      posts,
    },
    revalidate: 3, // 单位：秒。在用户请求时在服务端重新渲染现有页面（如果页面存在超过这个时间）
    // 1. yarn dev
    // 2. yarn build
    // 3. yarn start 
    // 4. 刷新页面，查看server端是否有打印posts,证明页面重新渲染
  }
}

export default Blog