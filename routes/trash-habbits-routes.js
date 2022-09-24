const express = require('express')
const {
  getTrashHabbits,
  postTrashHabbit,
  deleteTrashHabbit,
} = require('../controllers/trash-habbit-controller')

const router = express.Router()

router.get('/', getTrashHabbits)

router.post('/', postTrashHabbit)

router.delete('/:id', deleteTrashHabbit)

module.exports = router