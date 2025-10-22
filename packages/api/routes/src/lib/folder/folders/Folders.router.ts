import { FolderModel, folderToJSON } from '@dataroom/api-models';
import { requireAuth } from '@dataroom/api-utils';
import { Folder, FoldersParams } from '@dataroom/shared-types';
import express from 'express';

const router = express.Router();

router.get<never, Folder[], never, FoldersParams>(
  '/folders',
  requireAuth,
  async (req, res) => {
    const { parent } = req.query;

    const folders = await FolderModel.find({ parent });

    res.send(await Promise.all(folders.map(folderToJSON)));
  },
);

export { router as foldersRouter };
