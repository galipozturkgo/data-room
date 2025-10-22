import express from 'express';

import { deleteFileRouter } from './delete-file/DeleteFile.router';
import { getFileRouter } from './get-file/GetFile.router';
import { signFileRouter } from './sign-file/SignFile.router';

const router = express.Router();

router.use(deleteFileRouter);
router.use(getFileRouter);
router.use(signFileRouter);

export { router as fileRoutes };
