// imports
import express from 'express';
import * as ContactController from '../controllers/contactController';

// setting endpoint on router
const router = express.Router();

router.post('/', ContactController.postContact);

export default router;

// End of Document --------------------------------------------------------------------------------