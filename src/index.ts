import express, { Request, Response, json } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import seriesRouter from "@/routers/series.router";
import { errorHandling } from "@/middlewares/error-handling-middleware";

const app = express();
app.use(json());
app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
});
app.use(seriesRouter);
app.use(errorHandling);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});