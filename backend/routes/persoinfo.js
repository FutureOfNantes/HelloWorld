import express from 'express';

import { getInfo } from '../controllers/persoinfo.js';

const router = express.Router();

router.get('/', getInfo);

export default router;