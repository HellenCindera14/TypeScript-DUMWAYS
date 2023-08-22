import { Request, Response } from "express";
// import ThreadsService from "../services/ThreadService";
import  RegisrasiServices from "../services/RegisterService"

class RegisrasiController {
  find(req: Request, res: Response) {
    RegisrasiServices.find(req, res);
  }

  findOne(req: Request, res: Response) {
    RegisrasiServices.findOne(req, res);
  }

  create(req: Request, res: Response) {
    RegisrasiServices.create(req, res);
  }
  delete(req: Request, res: Response) {
    RegisrasiServices.delete(req, res);
  }
  update(req: Request, res: Response) {
    RegisrasiServices.update(req, res);
  }
}

export default new RegisrasiController();