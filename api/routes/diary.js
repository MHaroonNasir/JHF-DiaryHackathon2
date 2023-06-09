const { Router } = require('express');

const diaryController = require('../controllers/diary');

const diaryRouter = Router();

diaryRouter.get('/', diaryController.index);
diaryRouter.get('/:id', diaryController.show);
diaryRouter.post('/', diaryController.create);
diaryRouter.patch('/:id', diaryController.update);
diaryRouter.delete('/:id', diaryController.destroy);
diaryRouter.get('/:category', diaryController.getByCategory);

module.exports = diaryRouter;