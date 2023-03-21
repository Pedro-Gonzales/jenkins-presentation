import { Request, Response } from "express";
import { GetOnlySubjectsUseCase } from "./GetOnlySubjectsUseCase";


export class GetOnlySubjectsController{
    async handle(request: Request, response: Response){

        const { id } = request.params

        const getOnlySubjects = new GetOnlySubjectsUseCase

        const result = await getOnlySubjects.execute(Number(id))

        if(result.success){
            return response.json(result)
        }else{
            return response.status(400).json(result)
        }
    }
}