import { Router } from "express";
import { GetAllTeachersController } from "../modules/teachers/getAllTeachers/GetAllTeachersController";
import { GetOnlyTeachersController } from "../modules/teachers/getOnlyTeacher/GetOnlyTeacherController";




export const teachersRoutes = Router();

const getAllTeachers = new GetAllTeachersController;
const getOnlyTeacher = new GetOnlyTeachersController;


teachersRoutes.get('/', (req, res)=>{
    return getAllTeachers.handle(req, res);
});

teachersRoutes.get('/:id', (req, res)=>{
    return getOnlyTeacher.handle(req, res);
});

