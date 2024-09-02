import { Request, Response } from 'express';
import { signMessage } from '../services/signature.service';

const signatureHandler = async (req: Request, res: Response): Promise<Response<string | Error>> => {
    const message: string = req.body?.message;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const signature = signMessage(message);
        return res.json({ signature });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export {
    signatureHandler
}