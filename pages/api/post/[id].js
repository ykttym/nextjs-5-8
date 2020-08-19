export default (req, res) => {
  const {
    query: { id },
  } = req

  res.json({
    title: `博客${id}`,
    id: id,
    content: '内容xxx'
  })
}