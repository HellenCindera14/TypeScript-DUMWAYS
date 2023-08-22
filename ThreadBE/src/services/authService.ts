import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import  AppDataSource  from "../data-source";
import { User } from "../entities/user";
import { loginSchema, registerSchema } from "../utils/validator/user";

class AuthService {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

    async register(reqBody: any): Promise<any> {
      try {
        const { error } = registerSchema.validate(reqBody);
    
        if (error) {
          throw new Error(`Validation error: ${error.details[0].message}`);
        }
    
        const isEmailRegistered = await this.authRepository.count({
          where: {
            email: reqBody.email,
          },
        });
    
        if (isEmailRegistered > 0) {
          throw new Error("Email is already registered!");
        }
    
        const password = await bcrypt.hash(reqBody.password, 10);
    
        const user = this.authRepository.create({
          fullname: reqBody.fullname,
          username: reqBody.username,
          email: reqBody.email,
          password: password,
        });
    
        await this.authRepository.save(user);
    
        return {
          message: "Registration successful!",
          user: user,
        };
      } catch (err) {
        
        if (err.message === "Email is already registered!") {
          throw err; 
        } else if (err.message.startsWith("Validation error:")) {
          throw err; 
        } else {
          throw new Error("Something went wrong during registration.");
        }
      }
    }
    

  async login(reqBody: any): Promise<any> {
    try {
      const { error } = loginSchema.validate(reqBody);

      if (error) {
        throw new Error(error.details[0].message);
      }

      const user = await this.authRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "fullname", "email", "username", "password"],
      });

      if (!user) {
        throw new Error("Email / password is wrong!");
      }

      const isPasswordValid = await bcrypt.compare(
        reqBody.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Email / password is wrong!");
      }

      const token = jwt.sign({ user }, "bisalah!!", { expiresIn: "1h" });

      return {
        message: "Login successful!",
        user: {
          id: user.id,
          fullname: user.fullname,
          username: user.username,
          email: user.email,
        },
        token: token,
      };
    } catch (err) {
      throw new Error("Something went wrong on the server!");
    }
  }

  async check(loginSession: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
      });

      return {
        message: "Token is valid!",
        user: user,
      };
    } catch (err) {
      throw new Error("Something went wrong on the server!");
    }
  }
}

export default new AuthService();