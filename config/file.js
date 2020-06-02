import fs from 'fs';
import Files from '../service/main/files';
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'http://localhost:3040';

export default {
  create(req, res) {
    if (req.files) {
      const { file } = req.files;
      const filename = `${new Date().toISOString()}-${file.name}`;
      file.mv(`./files/${filename}`, (err) => {
        if (err) { res.status(500).json(err); console.log(err) } else {
            req.body = { url: `${BASE_URL}/files/${filename}` }
            Files.create(req).then(() => res.status(201).json({url: `${BASE_URL}/files/${filename}`})).catch(err=>res.status(502).json(err))
        }
      });
    } else {
      res.status(403).json({ message: 'file currupted or larger than expected' });
    }
  },
  delete(req, res) {
    Files.get(req).then(({ data }) => {
      const path = `./files/${data.url.split('/')[2]}`;
      fs.unlink(path);
      Files.delete(req).then(() => res.sendStatus(200)).catch(err=> res.status(502).json(err));
    });
  },
};
