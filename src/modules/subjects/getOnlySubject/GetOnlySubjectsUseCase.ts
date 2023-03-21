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
    async execute(subjectId: string) : Promise<IGetOnlySubjects>{
      const { subjects } =  JSON.parse(fs.readFileSync('./src/database/subjects.json', 'utf-8'))
       const subject =  subjects.find((subject : any) => subject.id === subjectId)
       if(subject){
        return {
            success: true,
            subject
        }
       }else{
        return {
            success: false,
            message: 'Subject not found'
        }
       }
    };
};