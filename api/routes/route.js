const { Router } = require('express');
const diaryController = require('../controllers/controller');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.get("/:id", diaryController.showById);
diaryRouter.get("/:datetime", diaryController.showByDateTime);
diaryRouter.post("/", diaryController.create);
diaryRouter.patch("/:id", diaryController.update);
diaryRouter.delete("/:id", diaryController.destroy);

module.exports = diaryRouter;
