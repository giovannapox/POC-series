import { serieSchema } from "@/schemas/serie.schema";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";


export function serieValidation (req: Request, res: Response, next: NextFunction){
    
    const validation = serieSchema.validate(req.body, { abortEarly: false});

    if(validation.error){
        const errors = validation.error.details.map((d) => d.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    };

    next();
};