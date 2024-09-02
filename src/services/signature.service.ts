import { ec as EC } from 'elliptic';
import { hashMessage } from '../utils/crypto.util';

const ec = new EC('secp256k1');
let keyPair: EC.KeyPair;

const generateKeyPair = (): void => {
    keyPair = ec.genKeyPair();
    console.log("Elliptic key pair generated.");
}

const signMessage = (message: string): string => {
    if (!keyPair) {
        throw new Error('Key pair has not been initialized.');
    }
    const msgHash = hashMessage(message);
    const signature = keyPair.sign(msgHash);
    return signature.toDER('hex');
}

export {
    generateKeyPair,
    signMessage
}