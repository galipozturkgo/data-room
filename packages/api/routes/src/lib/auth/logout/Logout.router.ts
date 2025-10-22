import { requireAuth } from '@dataroom/api-utils';
import express from 'express';

const router = express.Router();

router.post('/logout', requireAuth, async (req, res) => {
  req.logout(() => null);

  res.sendStatus(200);
});

export { router as logoutRouter };
