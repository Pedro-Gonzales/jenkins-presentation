import *  as fs from 'fs'

export interface IGetOnlySubjects{
    success: boolean,
    message?: string,
    subject?: {
        id: string,
        subjectName: string,
        course: string
    }
};

export class GetOnlySubjectsUseCase {
    async execute(subjectId: number) : Promise<IGetOnlySubjects>{
      const { subjects } =  JSON.parse(fs.readFileSync('./src/database/subjects.json', 'utf-8'))
       const index =  subjects.findIndex((subject : any) => subject.id === subjectId)
       if(index !== -1){
        return {
            success: true,
            subject : subjects[index]
        }
       }else{
        return {
            success: false,
            message: 'Subject not found'
        }
       }
    };
};