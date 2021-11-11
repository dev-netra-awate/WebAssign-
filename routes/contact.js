import express from 'express';
import * as contactController from '../controllers/contact.js';

const router = express.Router();

router.route('/contacts')
.get(contactController.index)
.post(contactController.save);
 
export default router;