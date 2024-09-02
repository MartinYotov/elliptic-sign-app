import crypto from 'crypto';

const hashMessage = (message: string): string =>{
    return crypto.createHash('sha256').update(message).digest('hex');
}

export {
    hashMessage
}