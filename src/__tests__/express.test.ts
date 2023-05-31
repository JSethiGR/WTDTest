import request from "supertest";
import express, { Express, Router } from "express";
import { initExpressRoutes } from "../express";

describe("Clinic Search", () => {
  const app: Express = express();
  const router: Router = initExpressRoutes(app);
  app.use("/", router);

  test("Hitting endpoint results in 200 response", async () => {
    const res = await request(app).post("/clinic-search");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Hello World!");
  });

  test("Get request to non-existent endpoint results in 404 response", async () => {
    const res = await request(app).get("/non-existent");
    expect(res.statusCode).toBe(404);
  });

  test("Post request to non-existent endpoint results in 404 response", async () => {
    const res = await request(app).post("/non-existent");
    expect(res.statusCode).toBe(404);
  });
});
