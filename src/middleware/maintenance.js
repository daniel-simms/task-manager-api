// Maintenance mode
app.use((req, res, next) => {
  res.status(503).send({ Maintenance: true });
});
