import { Request, Response } from "express";
import { GetOnlyTeachersUseCase } from "./GetOnlyTeacherUseCase";


export class GetOnlyTeachersController{
    async handle(request: Request, response: Response){

        const { id } = request.params

        const getOnlyTeachers = new GetOnlyTeachersUseCase

        const result = await getOnlyTeachers.execute(Number(id))

        if(result.success){
            return response.json(result)
        }else{
            return response.status(400).json(result)
        }
    }
}