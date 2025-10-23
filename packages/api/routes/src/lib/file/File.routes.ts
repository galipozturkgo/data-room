import express from 'express';

import { addFilesRouter } from './add-files/AddFiles.router';
import { deleteFileRouter } from './delete-file/DeleteFile.router';
import { filesRouter } from './files/Files.router';
import { signFilesRouter } from './sign-files/SignFiles.router';
import { updateFileRouter } from './update-file/UpdateFile.router';

const router = express.Router();

router.use(filesRouter);
router.use(signFilesRouter);
router.use(addFilesRouter);
router.use(updateFileRouter);
router.use(deleteFileRouter);

export { router as fileRoutes };
