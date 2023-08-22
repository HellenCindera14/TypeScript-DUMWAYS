import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { v2 as cloudinary} from 'cloudinary'

// cloudinary.config({
//     claod_name: "ddlupyy8i",
//     api_key: "151499178714111",
//     api_secret: "xmwXIpFtMZWyDm8GzcQQB8F77DA"
// })

const authenticate =(
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "belum login",
    });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const loginSession = jwt.verify(token, "bisalah!!");
    res.locals.loginSession = loginSession;
    next();

  } catch (err) {
    return res.status(401).json({
      error: "token salah",
    });
  }
}

export default authenticate

