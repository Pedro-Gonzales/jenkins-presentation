import { Router } from "express";
import { GetAllSubjectsController } from "../modules/subjects/getAllSubjects/GetAllSubjectsController";
import { GetOnlySubjectsController } from "../modules/subjects/getOnlySubject/GetOnlySubjectsController";




export const subjectsRoutes = Router();

const getAllSubjects = new GetAllSubjectsController;
const getOnlySubject = new GetOnlySubjectsController;


subjectsRoutes.get('/', (req, res)=>{
    return getAllSubjects.handle(req, res);
});

subjectsRoutes.get('/:id', (req, res)=>{
    return getOnlySubject.handle(req, res);
});

