import { Router } from 'express';
import { 
  getExample, 
  createExample, 
  getExampleById, 
  updateExample, 
  deleteExample 
} from './example.controller.ts';

const router = Router();

// GET /example - Get all examples
router.get('/', getExample);

// POST /example - Create a new example
router.post('/', createExample);

// GET /example/:id - Get example by ID
router.get('/:id', getExampleById);

// PUT /example/:id - Update example by ID
router.put('/:id', updateExample);

// DELETE /example/:id - Delete example by ID
router.delete('/:id', deleteExample);

export default router;
