import express from "express";
import mainRoutes from "./routes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(mainRoutes);

export default app;
