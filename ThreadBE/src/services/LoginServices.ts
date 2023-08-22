import { Repository } from "typeorm";
import AppDataSource from "../src/data-source";
import { Users } from "../src/entities/user";
import { Request, Response } from "express";

class LoginServices {
    private readonly LoginRepository: Repository<Users> =
      AppDataSource.getRepository(Users);

      async find(req: Request, res: Response) {
        try {
          const users = await this.LoginRepository.find();
          return res.status(200).json(users);
        } catch (err) {
          return res.status(500).json({ err: "users gagal ditemukan" });
        }
      }
    
      async findOne(req: Request, res: Response) {
        try {
          const id = parseInt(req.params.id);
          const user = await this.LoginRepository.findOne({
            where: { 
              id: id,
            },
          });
          return res.status(200).json(user + "berhasil ditemukan satu user");
        } catch (err) {
          return res.status(200).json({ err: "satu user gagal ditemukan" });
        }
      }
    

      async create(req: Request, res: Response) {
        try {
          const data = req.body;
          const user = this.LoginRepository.create({
            email: data.email,
            password: data.password,
          });
          const createUser = this.LoginRepository.save(user)
          console.log("user",user)
          return res.status(200).json(createUser)
        } catch (err) {
          return res.status(500).json({errr: "gagal login" });
        }
      }
}

export default LoginServices