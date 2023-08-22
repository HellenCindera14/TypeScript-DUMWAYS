import { Repository } from "typeorm";
import { Users } from "../src/entities/user";
import AppDataSource from "../src/data-source";
import { Request, Response } from "express";

class registerServices {
    private readonly RegisterRepository: Repository<Users> =
      AppDataSource.getRepository(Users);
  
    async find(req: Request, res: Response) {
      try {
        const users = await this.RegisterRepository.find();
        return res.status(200).json(users);
      } catch (err) {
        return res.status(500).json({ err: "users gagal ditemukan" });
      }
    }
  
    async findOne(req: Request, res: Response) {
      try {
        const id = parseInt(req.params.id);
        const user = await this.RegisterRepository.findOne({
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
        const user = this.RegisterRepository.create({
          email: data.email,
          fullname: data.fullname,
          username: data.username,
          password: data.password,
        });
        const createUser = this.RegisterRepository.save(user)
        return res.status(200).json(createUser)
      } catch (err) {
        return res.status(500).json({errr: "gagal create data" });
      }
    }

    async update(req: Request, res: Response) {
      try {
        const id = parseInt(req.params.id);
        const user = await this.RegisterRepository.findOne({
          where: {
            id: id,
          },
        });
  
        const data = req.body;
  
        if (data.email != "") {
          user.email = data.email;
        }
        if (data.fullname != "") {
          user.fullname = data.fullname;
        }
  
        if (data.username != "") {
          user.username = data.username;
        }
  
  
        if (data.password != "") {
          user.password = data.password;
        }
  
        const updatedThread = this.RegisterRepository.save(user);
        return res.status(200).json(updatedThread);
      } catch (err) {
        return res.status(500).json({ err: "Gagal Update" });
      }
    }
  
    async delete(req: Request, res: Response) {
      try {
        const id = parseInt(req.params.id);
        const user = await this.RegisterRepository.findOne({
          where: {
            id: id,
          },
        });
      } catch (err) {
        return res.status(500).json({ err: "delete gagal" });
      }
    }
  }
  
  export default new registerServices
