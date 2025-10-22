import { FolderModel } from '@dataroom/api-models';
import { NotFound, requireAuth, validateRequest } from '@dataroom/api-utils';
import { UpdateFolder } from '@dataroom/shared-types';
import express from 'express';

import schema from './UpdateFolder.schema';

const router = express.Router();

router.put<never, never, UpdateFolder>(
  '/update',
  requireAuth,
  validateRequest(schema),
  async (req, res) => {
    const { id, ...rest } = req.body;

    const email = await FolderModel.findById(id);

    if (!email) {
      throw new NotFound();
    }

    await email.updateOne(rest);

    res.sendStatus(200);
  },
);

export { router as updateFolderRouter };
