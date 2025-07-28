// imports
import express from 'express';
import * as ProjectController from '../controllers/projectController';
import multer from 'multer';

// setting endpoint on router
const router = express.Router();

// Upload images for middleware
const upload = multer({ storage: multer.memoryStorage() });

// Apply middleware
router.use(upload.single('image'));

// Get all projects route
router.get('/', ProjectController.getProjects);

// Get single project route
router.get('/:projectId', ProjectController.getSingleProject);

// Create project route
router.post('/', ProjectController.createProject);

// Update project route
router.patch('/:projectId', ProjectController.updateProject);

// Delete project route
router.delete('/:projectId', ProjectController.deletePropject);

export default router;

// End of Document --------------------------------------------------------------------------------