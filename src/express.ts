import express, { Express, Router } from "express";
import { helloWorld } from "./helloWorld";

/**
 * Initializes the http routes that Express will serve.
 * @param {Express} expressServer an initialized Express server instance.
 */
export const initExpressRoutes = (expressServer: Express): Router => {
  const router = express.Router();
  expressServer.use("/", router);

  router.get("/hello-world", helloWorld);

  router.get("*", (req, res) => {
    res.sendStatus(404);
  });

  router.post("*", (req, res) => {
    res.sendStatus(404);
  });

  console.info("Express routes applied");
  return router;
};
