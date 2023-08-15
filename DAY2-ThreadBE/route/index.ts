//API
import * as express from "express";
// import ThreadsController from "../controllers/ThreadsController";
import UserContoller from "../controllers/UserContoller";
import authController from "../controllers/authController";
import ThreadsController from "../controllers/ThreadsController";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello World!");
});
 

//THREAD
router.get("/threads", ThreadsController.find);
router.get("/threads/:id", ThreadsController.findOne);
router.post("/threads/create", ThreadsController.create);
router.patch("/threads/update/:id", ThreadsController.update);
router.delete("/threads/delete/:id", ThreadsController.delete);

//USER
router.get("/user", UserContoller.find);
router.get("/user/:id", UserContoller.findOne);
router.post("/user/create", UserContoller.create);
router.patch("/user/update/:id", UserContoller.update);
router.delete("/user/delete/:id", UserContoller.delete);

//AUTH
router.post("/auth/register",authController.register);
router.post("/auth/login",authController.login);

export default router;
