import { FolderModel, folderToJSON } from '@dataroom/api-models';
import { requireAuth, validateRequest } from '@dataroom/api-utils';
import { AddFolder, Folder } from '@dataroom/shared-types';
import express from 'express';

import schema from './AddFolder.schema';

const router = express.Router();

router.post<never, Folder, AddFolder>(
  '/add',
  requireAuth,
  validateRequest(schema),
  async (req, res) => {
    const { id: user } = req.user;
    const { name, parent } = req.body;

    const folder = await FolderModel.add({ user, name, parent }).save();

    res.send(await folderToJSON(folder));
  },
);

export { router as addFolderRouter };
