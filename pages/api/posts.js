// posts 博客列表
export default (req, res) => {
  res.statusCode = 200;
  const re = Array(6)
    .fill(0)
    .map((item, idx) => ({
      title: `博客${idx + 1}`,
      id: idx + 1,
    }));
  res.json(re);
};
