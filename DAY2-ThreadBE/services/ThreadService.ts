import { Repository } from "typeorm";
import { Threads } from "../src/entities/Threads";
import { Request, Response } from "express";
import AppDataSource from "../src/data-source";

class ThreadService {
  check(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
      throw new Error("Method not implemented.");
  }
  login: any;
  register(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) {
      throw new Error("Method not implemented.");
  }
  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find({
        relations: ["user"]
      });
      return res.status(200).json(threads);
    } catch (err) {
      return res.status(404).json("Something eror in server");
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const threads = await this.threadRepository.findOne({
        relations : ["user"],
        where: {
          id: id,
        },
      });
      return res.status(200).json(threads);
    } catch {
      return res.status(404).json("Something eror in fineOne");
    }
  }

  
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      // const {error} = data.eror;
      // if (error) {
      //   return res.status(404).json({message: "Failed to create thread.", error: error.message})
      // }
      const thread = this.threadRepository.create({
        content: data.content,
        image: data.image,
        posted_at: data.posted_at,
        user: data.user,
      });
      const createdThread = await this.threadRepository.save(thread);
      return res.status(200).json(createdThread);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create thread.", error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    try {
      const threads = await this.threadRepository.delete(id);
      return res.status(200).json(threads);
    } catch (error) {
      return res.status(200).json({
        message: "err",
      });
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    console.log(id);
    const threadz = await this.threadRepository.findOne({
      where: {
        id: id,
      },
    });

    const data = req.body;

    if (data.content != "") {
      threadz.content = data.content;
    }

    if (data.content != "") {
      threadz.image = data.image;
    }

    const updatedThread = this.threadRepository.save(threadz);

    return res.status(200).json(updatedThread);
  }
}

export default new ThreadService();
