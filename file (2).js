import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.get("/:lang", async (req, res) => {
  const { lang } = req.params;
  const lessons = await prisma.lesson.findMany({ where: { language: lang } });
  res.json(lessons);
});

export default router;
