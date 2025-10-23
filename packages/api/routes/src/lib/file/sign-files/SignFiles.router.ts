import { requireAuth, validateRequest } from '@dataroom/api-utils';
import { SignFileParams, SingedFile } from '@dataroom/shared-types';
import express from 'express';

import { signFile } from '../File.commands';
import schema from './SignFiles.schema';

const router = express.Router();

router.post<never, SingedFile[], SignFileParams[]>(
  '/sign-multiple',
  requireAuth,
  validateRequest(schema),
  async (req, res) => {
    const response = await Promise.all(
      req.body
        .filter((i) => i)
        .map(async (i) => {
          const { id, folder, name, type } = i;

          const { key, signed } = await signFile({
            folder,
            name,
            type,
          });

          return { id, key, signed };
        }),
    );

    res.send(response);
  },
);

export { router as signFilesRouter };
