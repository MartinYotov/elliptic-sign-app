import app from './app';
import { generateKeyPair } from './services/signature.service';

const port = 3000;

generateKeyPair();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
