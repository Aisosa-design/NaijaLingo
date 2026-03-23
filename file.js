import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.get("/languages", async (req, res) => {
  const langs = await prisma.language.findMany();
  res.json(langs);
});

app.post("/progress", async (req, res) => {
  const { userId, lessonId, score } = req.body;
  const progress = await prisma.progress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    update: { score },
    create: { userId, lessonId, score }
  });
  res.json(progress);
});

app.listen(4000, () => console.log("API running on port 4000"));
