import express from 'express';

import { postVerify } from '../controllers/verify.js';

const router = express.Router();

router.post('/', postVerify);

export default router;