import { post, get, deleteById, updateById } from "@/repositories/series.repository";
import { serie } from "@/protocols/series.protocol";

export async function postNewSerie(serie: serie):Promise<void>{
    return await post(serie);
};

export async function getAllSeries(){
    return await get();
};

export async function deleteSerieById(id: number): Promise<void>{
    return await deleteById(id);
};

export async function updateSerieById(id: number, serie: serie): Promise<void>{
    return await updateById(id, serie);
};