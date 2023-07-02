import { serie } from "@/protocols/series.protocol";
import { deleteSerieById, getAllSeries, postNewSerie, updateSerieById } from "@/services/series.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postSerie(req: Request, res: Response){
    const serie = req.body as serie;
    await postNewSerie(serie);
    res.sendStatus(httpStatus.CREATED);
};

export async function getSerie(req: Request, res: Response){
    const allSeries: serie[] = await getAllSeries();
    res.send(allSeries).status(httpStatus.OK);
};

export async function deleteSerie(req: Request, res: Response){
    const { id } = req.params;
    await deleteSerieById(Number(id));
    res.sendStatus(httpStatus.OK);
};

export async function updateSerie(req: Request, res: Response){
    const { id } = req.params;
    const serie = req.body as serie;

    await updateSerieById(Number(id), serie);
    res.sendStatus(httpStatus.OK);
};