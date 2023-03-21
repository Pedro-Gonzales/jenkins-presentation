import { Request, Response } from "express";
import { GetAllTeachersUseCase } from "./GetAllTeachersUseCase";


export class GetAllTeachersController{
    async handle(request: Request, response: Response){

        const getAllTeachers = new GetAllTeachersUseCase

        const result = await getAllTeachers.execute()

        return response.json(result)
    }
}