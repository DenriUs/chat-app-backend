import { Router } from 'express';

import { validateRequestInputMiddleware } from 'src/middleware';

import { idMessageParamsSchema, createMessageBodySchema, updateMessageBodySchema } from './schemas';
import { messgesController } from './messages.controller';

const router = Router({ mergeParams: true });

router.post(
  '/',
  validateRequestInputMiddleware({
    params: idMessageParamsSchema.pick({ chatId: true }),
    body: createMessageBodySchema,
  }),
  messgesController.createOne,
);
router.get(
  '/',
  validateRequestInputMiddleware({ params: idMessageParamsSchema.pick({ chatId: true }) }),
  messgesController.find,
);
router.post(
  '/:messageId',
  validateRequestInputMiddleware({ params: idMessageParamsSchema, body: updateMessageBodySchema }),
  messgesController.updateOne,
);
router.delete(
  '/:messageId',
  validateRequestInputMiddleware({ params: idMessageParamsSchema }),
  messgesController.deleteOne,
);

export const messagesRouter = router;
