import { Router } from "express";
import { getOftenSymbol, palindrome } from "./api";

const router = Router();

router.get("/", (req, res) => {
  res.send("123");
});
router.get("/palindrome/:value", palindrome);
router.get("/getOftenSymbol/:value", getOftenSymbol);

export default router;
