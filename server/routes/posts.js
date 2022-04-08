import express from 'express';
import { index , getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';


const router = express.Router();

router.get('/', index)
router.get('/get',getPosts);
router.post('/get', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;