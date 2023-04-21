/**
 * Server:
 *
 * Este archivo guardara las definición del server
 *
 *          - Que middlewares se van a usar - montar middlewares
 *          - Montar los routers
 *
 */

import express from "express";
import koderRouter from "./routers/koder.router.js";
import authKoder from "./routers/auth.router.js";

const server = express(); // crear el server

// Middlewares
server.use(express.json());
// Routers
server.use("/koders", koderRouter);
server.use("/auth", authKoder);
export { server };
