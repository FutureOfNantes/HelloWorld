import express from 'express';
import { SiweMessage } from 'siwe';

const router = express.Router();

export const postVerify = async (req, res) => {
    const { message, signature } = req.body;
    console.log(req.body)
    const siweMessage = new SiweMessage(message);
    try {
        await siweMessage.verify({ signature: signature });
        res.send(true);
    } catch {
        res.send(false);
    }
};

export default router;
