import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import { httpLogger } from 'src/core';
import { env } from 'src/config';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(rateLimit({ windowMs: env.RATE_LIMIT_WINDOW_MS, limit: env.RATE_LIMIT_MAX }));

app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(httpLogger);

export default app;
