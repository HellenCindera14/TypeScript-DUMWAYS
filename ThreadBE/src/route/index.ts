//API
import * as express from "express";
import UserContoller from "../controllers/UserContoller";
import authController from "../controllers/authController";
import ThreadsController from "../controllers/ThreadsController";
// import { upload } from "../middlewares/uploadfile";
import image from "next/image";
import UserServices from "../services/UserServices";
import authService from "../services/authService";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello World!");
});
 

//THREAD
router.get("/threads", ThreadsController.find);
router.get("/threads/:id", ThreadsController.findOne);
// router.post("/threads/create", ThreadsController.create);
// router.patch("/threads/update/:id", ThreadsController.update);
// router.delete("/threads/delete/:id", ThreadsController.delete);
// router.post("threads/create", upload(image)), ThreadsController.create

//USER
router.get("/user", UserContoller.find);
router.get("/user/:id", UserContoller.findOne);
router.post("/user/create", UserServices.create);
router.patch("/user/update/:id", UserServices.update);
router.delete("/user/delete/:id", UserServices.delete);

//AUTH
// router.post("/auth/",authController.find);
router.post("/register",authController.register);
router.post("/login",authController.login);

export default router;
