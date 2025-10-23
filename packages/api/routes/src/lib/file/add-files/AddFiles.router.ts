import { FileModel, FolderModel } from '@dataroom/api-models';
import { NotFound, requireAuth, validateRequest } from '@dataroom/api-utils';
import { AddFiles } from '@dataroom/shared-types';
import { parseFileName } from '@dataroom/shared-utils';
import express from 'express';

import schema from './AddFiles.schema';

const router = express.Router();

router.post<never, never, AddFiles>(
  '/add',
  requireAuth,
  validateRequest(schema),
  async (req, res) => {
    const { id: user } = req.user;
    const { folder: folderName, files } = req.body;

    const folder = await FolderModel.findOne({ name: folderName });

    if (!folder) {
      throw new NotFound();
    }

    await Promise.all(
      files
        .filter((i) => i)
        .map(async (i) => {
          await FileModel.add({
            user,
            folder,
            ...i,
            name: parseFileName(i.name).name ?? i.name,
          }).save();
        }),
    );

    res.sendStatus(200);
  },
);

export { router as addFilesRouter };
