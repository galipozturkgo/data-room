import { UserModel } from '@dataroom/api-models';
import { CurrentUser } from '@dataroom/shared-types';
import express from 'express';
const router = express.Router();

router.get<never, CurrentUser>('/user', async (req, res) => {
  if (req.user) {
    await UserModel.findByIdAndUpdate(req.user.id, {
      lastLoginAt: new Date(),
    });
  }

  res.send({ user: req.user || null });
});

export { router as authUserRouter };
