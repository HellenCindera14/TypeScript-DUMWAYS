import { Repository } from "typeorm";
import { Threads } from "../src/entities/Threads";
import { AppDataSource } from "../src/data-source";
import { Request, Response } from "express";

class ThreadService {
  private readonly threadRepository: Repository<Threads> =
    AppDataSource.getRepository(Threads);

  async find(req: Request, res: Response) {
    try {
      const threads = await this.threadRepository.find();
      return res.status(200).json(threads);
    }catch (err) {

    }
   
  }

  async findOne(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const threads = await this.threadRepository.findOne({
      where: {
        id: id
      },
    });
    return res.status(200).json(threads);
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const thread = this.threadRepository.create({
        content: data.content,
        image: data.image,
        post_at: data.post_at,
        user_id: data.user_id,
      });
      const createdThread = await this.threadRepository.save(thread);
      return res.status(200).json(createdThread);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to create thread.", error: error.message });
    }
  }
  //dsini bikin validasi

  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    try {
      const threads = await this.threadRepository.delete(id);
      return res.status(200).json(threads);
    } catch (error) {
      return res.status(200).json({
        message: "err"
      })
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    console.log(id)
    const threadz = await this.threadRepository.findOne({
      where: {
        id: id
      }
    })

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

export default new ThreadService()
