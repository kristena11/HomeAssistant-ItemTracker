import { router } from './app/routes/router.js';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/search', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
export { app };