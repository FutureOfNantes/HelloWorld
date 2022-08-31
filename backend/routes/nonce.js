import express from 'express';

import { getNonce } from '../controllers/nonce.js';

const router = express.Router();

router.get('/', getNonce);

export default router;