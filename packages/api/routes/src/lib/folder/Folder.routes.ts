import express from 'express';

import { addFolderRouter } from './add-folder/AddFolder.router';
import { deleteFolderRouter } from './delete-folder/DeleteFolder.router';
import { folderRouter } from './folder/Folder.router';
import { updateFolderRouter } from './update-folder/UpdateFolder.router';

const router = express.Router();

router.use(folderRouter);
router.use(addFolderRouter);
router.use(updateFolderRouter);
router.use(deleteFolderRouter);

export { router as folderRoutes };
