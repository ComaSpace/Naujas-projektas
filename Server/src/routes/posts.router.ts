import express from 'express';
import { PostsController } from '../controllers/posts.controller';


const postsRouter = express.Router();

postsRouter.get('/', PostsController.getAll);
postsRouter.get('/:id', PostsController.get);
postsRouter.post('/', PostsController.store);

postsRouter.post('/:id/addComment', PostsController.addComment);

postsRouter.put('/:id', PostsController.update);
postsRouter.delete('/:id', PostsController.delete);



export {postsRouter}