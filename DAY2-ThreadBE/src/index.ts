import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import router from "../route/index";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    app.use(
      cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      })
    );
    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
