import { FileModel } from '@dataroom/api-models';
import { NotFound, requireAuth, validateRequest } from '@dataroom/api-utils';
import { UpdateFile } from '@dataroom/shared-types';
import express from 'express';

import schema from './UpdateFile.schema';

const router = express.Router();

router.put<never, never, UpdateFile>(
  '/update',
  requireAuth,
  validateRequest(schema),
  async (req, res) => {
    const { id, name } = req.body;

    const file = await FileModel.findById(id);

    if (!file) {
      throw new NotFound();
    }

    await file.updateOne({ name });

    res.sendStatus(200);
  },
);

export { router as updateFileRouter };
