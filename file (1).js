import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import lessonsRoutes from "./routes/lessons.js";
import progressRoutes from "./routes/progress.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/lessons", lessonsRoutes);
app.use("/progress", progressRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`NaijaLingo API running on port ${PORT}`));
