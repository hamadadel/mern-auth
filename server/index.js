const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).json({ title: 'nodejs api ' }));

app.listen(port, () => {
  console.log(`Server started at http://127.0.0.1:${port}`);
});
