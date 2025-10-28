import { Router } from 'express';

import { validateRequestInputMiddleware } from 'src/middleware';
import { searchQuerySchema } from 'src/core';
import { messagesRouter } from 'src/modules';

import { idChatParamsSchema, createChatBodySchema, updateChatBodySchema } from './schemas';
import { chatsController } from './chats.controller';

const router = Router();

router.post(
  '/',
  validateRequestInputMiddleware({ body: createChatBodySchema }),
  chatsController.createOne,
);
router.get(
  '/:chatId',
  validateRequestInputMiddleware({ params: idChatParamsSchema }),
  chatsController.findOne,
);
router.get('/', validateRequestInputMiddleware({ query: searchQuerySchema }), chatsController.find);
router.post(
  '/:chatId',
  validateRequestInputMiddleware({ params: idChatParamsSchema, body: updateChatBodySchema }),
  chatsController.updateOne,
);
router.delete(
  '/:chatId',
  validateRequestInputMiddleware({ params: idChatParamsSchema }),
  chatsController.deleteOne,
);

router.use('/:chatId/messages', messagesRouter);

export const chatsRouter = router;
