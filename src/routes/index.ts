import { Router } from "express";
import { subjectsRoutes } from "./subjects.routes";


export const router = Router();

router.use("/subjects", subjectsRoutes);
