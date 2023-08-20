import { Repository } from "typeorm";
import AppDataSource from "../src/data-source";
import { Request, Response } from "express";

import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Users } from "../src/entities/user";
import { loginSchema, registerSchema } from "../src/utils/validator/user";
import { error } from "console";

class AuthService {
  private readonly authRepository: Repository<Users> =
    AppDataSource.getRepository(Users);


    
  async register(req: Request, res: Response) {
    try {
      const data = req.body;

      const { error, value } = registerSchema.validate(data);
      if (error) {
        return res.status(400).json({ error: error });
      }

      const checkEmail = await this.authRepository.count({
        where: {
          email: value.email,
          username: value.username,
        },
      });

      if (checkEmail > 0) {
        return res.status(400).json("Error Email / username sudah ada");
      }

      const hashPassword =await bcrypt.hash(value.password, 10);

      const user = this.authRepository.create({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        picture: data.picture,
        description: data.description,
        password: hashPassword,
      });

     const createUser =  this.authRepository.save(user);
      return res.status(200).json(`data berhasil di buat`);
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }



  async login(req: Request, res: Response) {
    try {
      const data = req.body;
      console.log("test1")

      const checkEmail = await this.authRepository.findOne({
        
        where: {
          
          username: data.username,
          email: data.email,
        },
        select: [
          "id", 
          "fullname", 
          "username", 
          "email", 
          "password",
          "picture"
          
        ],
      });

      if (checkEmail) {
        console.log("test2")

        return res.status(400).json("Error Email / password is wrong");
      }

      const hashPass = await bcrypt.compare(data.password, checkEmail.password);
      console.log("test3")


      if (!hashPass) {
        console.log("test4")

        return res.status(400).json({pesan : "salah password"})
      }

      const user = this.authRepository.create({
        id: checkEmail.id,
        fullname: checkEmail.fullname,
        username: checkEmail.username,
        email: checkEmail.email,
        picture: checkEmail.picture
      });
      const token = jwt.sign({ user }, "bagiansecret", { expiresIn: "1h" });

      return res.status(200).json({
        user: user,
        token,
      });

    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }



  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;

      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
        select: ["id", "fullname", "username", "email", "password"],
      });

      return res.status(200).json({
        user,
        message: "Token is valid",
      });
    } catch (error) {
      return res.status(500).json("Terjadi kesalahan pada server");
    }
  }
}
export default new AuthService();
