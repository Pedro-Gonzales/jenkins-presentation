import *  as fs from 'fs'

export interface IGetAllSubjects{
    id: string,
    subjectName: string,
    course: string
};

export class GetAllSubjectsUseCase {
    async execute() : Promise<IGetAllSubjects[]>{
      const { subjects } =  JSON.parse(fs.readFileSync('./src/database/subjects.json', 'utf-8'))
          return subjects
    };
};