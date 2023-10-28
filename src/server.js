import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));

app.use(mainRoutes);

export default app;
