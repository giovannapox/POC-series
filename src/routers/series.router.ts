import { Router } from "express";
import * as seriesController from "@/controllers/series.controller";
import { serieValidation } from "@/middlewares/validate.series";

const router = Router();

router.post("/series", serieValidation, seriesController.postSerie);
router.get("/series", seriesController.getSerie);
router.delete("/series/:id", seriesController.deleteSerie);
router.put("/series/:id", serieValidation, seriesController.updateSerie);

export default router;

