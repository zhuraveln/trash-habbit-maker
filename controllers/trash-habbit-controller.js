const TrashHabbit = require('../models/trash_habbit')
const createPath = require('../helpers/create-path')

const handlError = (res, error) => {
  console.log(error)
}

const getTrashHabbits = (req, res) => {
  const title = 'Home'
  TrashHabbit
    .find()
    .sort({ createdAt: -1 })
    .then((trashHabbits) => res.render(createPath('index'), { trashHabbits, title }))
    .catch((error) => handlError(error))
}

const postTrashHabbit = (req, res) => {
  const { title, type } = req.body
  const trash_habbit = new TrashHabbit({ title, type })
  trash_habbit
    .save()
    .then((result) => res.redirect('/'))
    .catch((error) => handlError(error))
}

const deleteTrashHabbit = (req, res) => {
  TrashHabbit
    .findByIdAndDelete(req.params.id)
    .then(result => {
      res.sendStatus(200)
    })
    .catch((error) => handlError(error))
}

module.exports = {
  getTrashHabbits,
  postTrashHabbit,
  deleteTrashHabbit,
}