import { FileModel, fileToJSON, FolderModel } from '@dataroom/api-models';
import { requireAuth } from '@dataroom/api-utils';
import { File, FilesParams } from '@dataroom/shared-types';
import express from 'express';

const router = express.Router();

router.get<never, File[], never, FilesParams>(
  '/files',
  requireAuth,
  async (req, res) => {
    const { folder: folderName } = req.query;

    const folder = await FolderModel.findOne({ name: folderName });

    if (!folder) {
      res.send([]);
    }

    const files = await FileModel.find({ folder });

    const response = await Promise.all(
      files.map(async (file) => await fileToJSON(file)),
    );

    res.send(response);
  },
);

export { router as filesRouter };
