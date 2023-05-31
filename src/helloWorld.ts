import { Request, Response } from "express";

export const helloWorld = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).send("Hello World!");
  } catch (error) {
    res.sendStatus(500);
  }
};
