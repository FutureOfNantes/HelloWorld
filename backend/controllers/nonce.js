import express from 'express';
import { generateNonce } from 'siwe';

const router = express.Router();

export const getNonce = async (_, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(generateNonce());
};

export default router;