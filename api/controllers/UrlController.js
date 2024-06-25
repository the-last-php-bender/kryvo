import shortid from 'shortid';
import Url from '../models/Url.js';
import { encryptUrl, decryptUrl } from '../utils/encryption.js';

class UrlController {
  async create(req, res) {
    const { longUrl } = req.body;
    console.log(longUrl);
    const shortUrl = shortid.generate();
    try {
      const encryptedLongUrl = encryptUrl(longUrl);
      const newUrl = await Url.create({ shortUrl, longUrl: encryptedLongUrl });
      const fullShortUrl=`${process.env.BASE_URL}api/url/${shortUrl}`
      res.status(201).json({ fullShortUrl, longUrl });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    const { shortUrl } = req.params;

    try {
      const url = await Url.findOne({ where: { shortUrl } });
      if (url) {
        const decryptedLongUrl = decryptUrl(url.longUrl);
        res.redirect(decryptedLongUrl);
      } else {
        res.status(404).json({ message: 'URL not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UrlController();
