import * as express from 'express';
import * as React from 'react';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default router;