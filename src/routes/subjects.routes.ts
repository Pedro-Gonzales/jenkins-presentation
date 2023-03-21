import { Router } from "express";
import { GetAllSubjectsController } from "../modules/subjects/getAllSubjects/GetAllSubjectsController";




export const subjectsRoutes = Router();

const getAllSubjects = new GetAllSubjectsController;


subjectsRoutes.get('/', (req, res)=>{
    return getAllSubjects.handle(req, res);
});

