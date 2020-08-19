// 评论列表
export default (req, res) => {
  res.statusCode = 200;
  const re = Array(6)
    .fill(0)
    .map((item, idx) => ({
      content: `评论-${idx + 1}`,
      id: idx + 1,
    }));
  res.json(re);
};
