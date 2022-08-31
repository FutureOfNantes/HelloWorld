import express from 'express';

import { getSds, createSd } from '../controllers/sd.js';

const router = express.Router();

router.get('/', getSds);
router.post('/', createSd);

export default router;