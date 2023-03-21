import { Router } from "express";
import { subjectsRoutes } from "./subjects.routes";
import { teachersRoutes } from "./teachers.routes";


export const router = Router();

router.use("/subjects", subjectsRoutes);

router.use("/teachers", teachersRoutes);
