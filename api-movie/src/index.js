import express from 'express';
import cors from "cors";
import { connectDataBase } from "./database/db.js";
import routes from './routes.js';


const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use(routes);


connectDataBase().then(() => {
    app.listen(port, () => console.log("Servidor e banco de dados rodando na porta: ", port));
}).catch((e) => console.log(e));

