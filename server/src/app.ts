import * as express from 'express';
import * as helmet from 'helmet';

const app = express();
app.use(helmet());
app.use('/', (req, res, next) => res.json({ status: 'up' }));

app.listen(5001, () => {
  console.log('App is running at port 5001');
});

export default app;