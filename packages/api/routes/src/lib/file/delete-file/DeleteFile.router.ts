import { FileModel } from '@dataroom/api-models';
import { requireAuth } from '@dataroom/api-utils';
import { DeleteFile } from '@dataroom/shared-types';
import { formatISO } from 'date-fns';
import express from 'express';

const router = express.Router();

router.delete<never, never, DeleteFile>(
  '/delete',
  requireAuth,
  async (req, res) => {
    const { key, soft } = req.body;

    if (soft) {
      await FileModel.findOneAndUpdate(
        { key },
        { deleted: true, deletedAt: formatISO(new Date()) },
      );
    } else {
      await FileModel.findOneAndDelete({ key });
    }

    res.sendStatus(200);
  },
);

export { router as deleteFileRouter };
