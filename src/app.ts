import "dotenv/config";
import express from "express";
import cors from "express";
import clienteRoute from "./routes/cliente.route";
import dbInit from "./config/mongo";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(clienteRoute);
dbInit().then();
app.listen(port, () => console.log(`Listo, usando el puerto ${port}`));