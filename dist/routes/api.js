'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _user = require('../models/user');

const router = (0, _express.Router)();

router.get('/friends', (_, res) => res.json(_user.dummyData));

router.post('/friends', (req, res) => {
  let { scores } = req.body;

  if (!Array.isArray(scores)) {
    scores = [0];
  }

  const sum = scores.reduce((x, y) => x + y, 0);
  const match = _user.dummyData.map(d => {
    const $sum = d.scores.reduce((x, y) => x + y, 0);
    d.diff = Math.abs(sum - $sum);
    return d;
  }).sort((x, y) => x.diff - y.diff).shift();

  res.status(200).json({ match });
});

exports.default = router;
//# sourceMappingURL=api.js.map