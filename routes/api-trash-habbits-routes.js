const express = require('express')
const {
  getTrashHabbits,
  postTrashHabbit,
  deleteTrashHabbit,
} = require('../controllers/api-trash-habbit-controller')

const router = express.Router()

// Get All Trash Habbits
router.get('/api', getTrashHabbits)

// Post Trash Habbit
router.post('/api', postTrashHabbit)

// Delete Trash Habbit
router.delete('/api/:id', deleteTrashHabbit)

module.exports = router