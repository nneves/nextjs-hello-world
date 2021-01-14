// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200;
    res.json({ api: 'kencko-api', version: '0.0.1' });
  }
  