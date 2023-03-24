const diaryController = require('../controllers/controller')
const {Router} = require('express')

const diaryRouter = Router()

diaryRouter.get('/', diaryController.index)
diaryRouter.get('/:id', diaryController.show)
diaryRouter.post('/', diaryController.create)
diaryRouter.put('/:id', diaryController.update)
diaryRouter.delete('/:id', diaryController.destroy)

module.exports = diaryRouter