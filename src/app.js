import server from "./server";
require("dotenv").config();

server.listen(process.env.PORT);
