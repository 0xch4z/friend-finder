import { Router } from 'express'

import { dummyData } from '../models/user'

const router = Router()

router.get('/friends', (_, res) => res.json(dummyData))

router.post('/friends', (req, res) => {
  let { scores } = req.body

  if (!Array.isArray(scores)) {
    scores = [0]
  }

  const sum = scores.reduce((x, y) => x + y, 0)
  const match = dummyData.map(d => {
    const $sum = d.scores.reduce((x, y) => x + y, 0)
    d.diff = Math.abs(sum - $sum)
    return d
  }).sort((x, y) => x.diff - y.diff).shift()

  res.status(200).json({ match })
})

export default router
