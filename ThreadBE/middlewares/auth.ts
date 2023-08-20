import * as jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";

const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): Response =>{
    const authorrizationHeader = req.headers.authorization;

    if (!authorrizationHeader ||!authorrizationHeader.startsWith("Bearer")) {
        return res.status(401).json({
            eror: "Unauthorized",
        });
    }

    const token = authorrizationHeader.split("")[1];

    try {
        const LogiSession = jwt.verify (token, "ini teken");
        res.locals.LogiSession = LogiSession;
        next();

    }catch(eror) {
        return res.status(401).json({eror : "Unauthorized"});

    }
}

export default authenticate;
