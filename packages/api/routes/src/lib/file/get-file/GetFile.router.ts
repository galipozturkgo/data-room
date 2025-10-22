import { FileModel } from '@dataroom/api-models';
import { NotFound, requireAuth } from '@dataroom/api-utils';
import { GetFileParams, GetFileResponse } from '@dataroom/shared-types';
import express from 'express';

import { getFile } from '../File.commands';

const router = express.Router();

router.get<never, GetFileResponse, never, GetFileParams>(
  '/get',
  requireAuth,
  async (req, res) => {
    const { key } = req.query;

    const file = await FileModel.findOne({ key });

    if (!file) {
      throw new NotFound();
    }

    const url = await getFile({ key });

    res.send({ url });
  },
);

export { router as getFileRouter };
