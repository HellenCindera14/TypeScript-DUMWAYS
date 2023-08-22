import { NextFunction, Request, Response } from "express";
import * as multer from "multer";
import { v2 as cloudinary } from "cloudinary";

export const upload = (image: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  });

  const uploadFile = multer({ storage: storage });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(image)(req, res, function (err: any) {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          eror: "no file uploaded, please input your file!",
        });
      }

      try {
        cloudinary.uploader.upload(file.path, (eror, result) => {
          if (eror) {
            return res.status(500).json({
              eror: "failid upload to cloudinary! try again!",
            });
          }

          res.locals.filename = result.secure_url;
          next();
        });
      } catch (eror) {
        return res.status(400).json({
          eror: eror,
        });
      }
    });
  };
};
