import dotenv from "dotenv";
import { initExpressRoutes } from "./express";
import express, { Express } from "express";

const main = async (): Promise<void> => {
  console.info("Loading environment configuration...");
  dotenv.config();
  const expressPort = Number(process.env.PORT || 8080);
  const expressServer: Express = express();

  expressServer.listen({ port: expressPort }, () => {
	console.info("Express server listening on port " + expressPort);
  });

  // const expressServer = await initExpressServer(expressPort);
  initExpressRoutes(expressServer);
};

try {
  console.info("Starting main thread...");
  main();
} catch (error) {
  console.error(`Error caught from main. Error thrown was: ${error}`);
}
