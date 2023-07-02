import joi from "joi";
import { serie } from "@/protocols/series.protocol";

export const serieSchema = joi.object<serie>({
    name: joi.string().required(),
    gender: joi.string().required(),
    status: joi.string().required()
});