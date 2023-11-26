import { userRoutes } from './route/user.route';

import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to user project  ',
  });
});

export default app;
