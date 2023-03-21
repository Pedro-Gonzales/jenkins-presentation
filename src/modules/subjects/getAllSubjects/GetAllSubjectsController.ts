import { Request, Response } from "express";
import { GetAllSubjectsUseCase } from "./GetAllSubjectsUseCase";


export class GetAllSubjectsController{
    async handle(request: Request, response: Response){

        const getAllSubjects = new GetAllSubjectsUseCase

        const result = await getAllSubjects.execute()

        return response.json(result)
    }
}