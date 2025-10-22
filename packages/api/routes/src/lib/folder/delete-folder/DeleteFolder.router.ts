import { FolderModel } from '@dataroom/api-models';
import { requireAuth } from '@dataroom/api-utils';
import { DeleteFolderParams } from '@dataroom/shared-types';
import express from 'express';

const router = express.Router();

router.delete<DeleteFolderParams>(
  '/delete/:id',
  requireAuth,
  async (req, res) => {
    const { id } = req.params;

    await FolderModel.findByIdAndDelete(id);

    res.sendStatus(200);
  },
);

export { router as deleteFolderRouter };
