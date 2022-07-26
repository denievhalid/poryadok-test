import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes);

export default server;
