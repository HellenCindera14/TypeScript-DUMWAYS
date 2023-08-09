import * as express from "express";
import ThreadsController from "../controllers/ThreadsController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello World!");
});

router.get("/threads", ThreadsController.find);
router.get("/threads/:id", ThreadsController.findOne);
router.post("/threads/create", ThreadsController.create);
router.delete("/thread/delete/:id", ThreadsController.delete);
router.patch("/threads/update/:id", ThreadsController.update);

export default router;
