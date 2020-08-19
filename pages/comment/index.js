function Comment({ data }) {
  console.log('comment', data)
  return (
    <main>
      <h1>评论列表：</h1>
      <p>使用 getServerSideProps SSR</p>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </main>
  );
}

// 在服务端收到请求时候执行（每次）
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/comments");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Comment;
