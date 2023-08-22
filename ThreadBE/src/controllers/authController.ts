import { Request, Response, response } from "express";
import authService from "../services/authService";
import { request } from "http";

class AuthController {

  async register(req, res) {
    try {
      const data = await authService.register(req.body);
      return res.status(200).json(data); 
    } catch (error) {
      console.error(error); 
      return res.status(500).json({ error: "Something went wrong on the server!" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await authService.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong on the server!" });
    }
  }

  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await authService.check(loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something went wrong on the server!" });
    }
  }
}

export default new AuthController();