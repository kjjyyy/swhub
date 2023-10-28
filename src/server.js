import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";
import { handleNotFound } from "./middlewares/errorHandlers/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandlers";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(mainRoutes);
app.use(handleNotFound);
app.use(errorHandler);

export default app;
