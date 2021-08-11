import { Router, Request, Response } from 'express';
import { FileRouter } from './file/routes/file.routes';

const router: Router = Router();

router.use('/files', FileRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;