const TrashHabbit = require('../models/trash_habbit')

const handlError = (res, error) => {
  res.status(500).send(error.message)
}

const getTrashHabbits = (req, res) => {
  TrashHabbit
    .find()
    .sort({ createdAt: -1 })
    .then((trashHabbits) => {
      res
        .header('Access-Control-Allow-Origin', '*')
        .status(200).json(trashHabbits)
    })
    .catch((error) => handlError(error))
}

const postTrashHabbit = (req, res) => {
  const { title, type } = req.body
  const trash_habbit = new TrashHabbit({ title, type })
  trash_habbit
    .save()
    .then((trashHabbit) => res.status(200).json(trashHabbit))
    .catch((error) => handlError(error))
}

const deleteTrashHabbit = (req, res) => {
  TrashHabbit
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((error) => handlError(error))
}

module.exports = {
  getTrashHabbits,
  postTrashHabbit,
  deleteTrashHabbit,
}