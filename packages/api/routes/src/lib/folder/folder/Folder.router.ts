import { FolderModel, folderToJSON } from '@dataroom/api-models';
import { requireAuth } from '@dataroom/api-utils';
import { Folder, FolderParams } from '@dataroom/shared-types';
import express from 'express';

const router = express.Router();

router.get<never, Folder[], never, FolderParams>(
  '/folder',
  requireAuth,
  async (req, res) => {
    const { parent } = req.query;
    const { id: user } = req.user;

    const root = await FolderModel.findOne({ name: 'root' });

    if (!root) {
      await FolderModel.add({ user, name: parent } as Folder).save();
    }

    const folders = await FolderModel.find({ parent });

    res.send(await Promise.all(folders.map(folderToJSON)));
  },
);

export { router as folderRouter };
