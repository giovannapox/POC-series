import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { error } from "@/protocols/series.protocol";

export function errorHandling(erro: error, req: Request, res: Response, next: NextFunction){
    if(erro.name === "Not Found"){
        return res.status(httpStatus.NOT_FOUND).send(erro.message);
    }
};