import { Router } from 'express';

import { chatsRouter } from 'src/modules';

const router = Router();

router.use('/chats', chatsRouter);

export const mainRouter = router;
