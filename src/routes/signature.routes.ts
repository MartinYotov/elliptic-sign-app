import { Router } from "express";
import { signatureHandler } from "../controllers/signature.controller";

const signatureRouter = Router();

signatureRouter.post('/', signatureHandler);

export default signatureRouter;