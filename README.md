# Elliptic Sign App

This is a Node.js application that generates an elliptic key pair on server startup and allows users to sign messages with the private key. The signature is returned in DER format as a hexadecimal string.

## Features

- Generates an elliptic key pair (`secp256k1`) when the server starts.
- Hashes messages using SHA-256 before signing.
- Returns the signature in DER format (hexadecimal string).
- Simple web interface for message signing.

## Running the Application
### 1. Navigate to project directory:
   ```bash
   cd elliptic-sign-app
   ```
### 2. Install dependencies:
   ```bash
   npm install
   ```
### 3. Start the server:
   ```bash
   npm start
   ```
### 4. Access the web interface:
    Open your browser and navigate to `http://localhost:3000`.

    Enter your message, click "Sign Message," and see the DER-encoded signature below the form.