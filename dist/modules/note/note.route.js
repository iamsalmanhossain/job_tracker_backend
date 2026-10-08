import express, { Router } from 'express';
import { noteController } from './note.controller.js';
import { auth } from '../../middleware/auth.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { noteValidation } from './note.validation.js';
const router = express.Router();
router.post('/', auth(), validateRequest(noteValidation.createNote), noteController.createNote);
router.get('/', auth(), noteController.getAllNotes);
router.get('/:id', auth(), noteController.getSingleNote);
router.patch('/:id', auth(), validateRequest(noteValidation.updateNote), noteController.updateNote);
router.delete('/:id', auth(), noteController.deleteNote);
export const noteRoutes = router;
//# sourceMappingURL=note.route.js.map