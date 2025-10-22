import express from 'express';

import { addFolderRouter } from './add-folder/AddFolder.router';
import { deleteFolderRouter } from './delete-folder/DeleteFolder.router';
import { foldersRouter } from './folders/Folders.router';
import { updateFolderRouter } from './update-folder/UpdateFolder.router';

const router = express.Router();

router.use(foldersRouter);
router.use(addFolderRouter);
router.use(updateFolderRouter);
router.use(deleteFolderRouter);

export { router as folderRoutes };
