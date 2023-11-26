import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const buildPath = path.join(__dirname, '../build');

app.use(express.static(buildPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

