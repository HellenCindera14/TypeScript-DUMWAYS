import * as express from "express";
import ThreadsController from "../controllers/ThreadsController";
import UserContoller from "../controllers/UserContoller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello World!");
});

router.get("/threads", ThreadsController.find);
router.get("/threads/:id", ThreadsController.findOne);
router.post("/threads/create", ThreadsController.create);
router.delete("/threads/delete/:id", ThreadsController.delete);
router.patch("/threads/update/:id", ThreadsController.update);


router.get("/user", UserContoller.find);
router.get("/user/:id", UserContoller.findOne);
router.post("/user/create", UserContoller.create);
router.patch("/user/update/:id", UserContoller.update);
router.delete("/user/delete/:id", UserContoller.delete);

// router.post("/auth/register",authController.register);

export default router;
