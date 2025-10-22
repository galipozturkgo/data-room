import { requireAuth } from '@dataroom/api-utils';
import { SignFileParams, SingedFile } from '@dataroom/shared-types';
import express from 'express';

import { addFile } from '../File.commands';

const router = express.Router();

router.post<never, SingedFile, SignFileParams>(
  '/sign',
  requireAuth,
  async (req, res) => {
    const { id: user } = req.user;
    const { prefix, name, type, parent } = req.body;

    const { key, signed } = await addFile({
      user,
      parent,
      prefix,
      name,
      type,
    });

    res.send({ name, key, signed });
  },
);

export { router as signFileRouter };
