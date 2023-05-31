import { Request, Response } from "express";

export const test = async (req: Request, res: Response): Promise<void> => {
  try {
    function fibonacci(n: number): number {
      let fib: number[] = [0, 1];
      for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib[n];
    }

    res.status(200).send(fibonacci(9));
  } catch (error) {
    res.sendStatus(500);
  }
};
