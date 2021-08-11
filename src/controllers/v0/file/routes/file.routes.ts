import { Router, Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../../../../util/util';

const router: Router = Router();

router.get('/filteredImage', async(req: Request, res: Response) => {
  const { image_url } = req.query;
  if (!image_url) {
    res.status(422).send({ message: 'Image url is not valid.'})
  }

  const image_path = await filterImageFromURL(image_url);

  res.status(200).sendFile(image_path, (error) => {
    if (error) {
      res.status(500).send({ message: 'Internal error, try again..'})
    }
    deleteLocalFiles([image_path]);
  });  
});

export const FileRouter: Router = router;