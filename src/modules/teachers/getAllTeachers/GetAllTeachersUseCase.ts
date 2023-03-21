import *  as fs from 'fs'

export interface IGetAllTeachers{
    id: string,
    teacherName: string,
    isDepartamentChief: boolean
};

export class GetAllTeachersUseCase {
    async execute() : Promise<IGetAllTeachers[]>{
      const { teachers } =  JSON.parse(fs.readFileSync('./src/database/teachers.json', 'utf-8'))
          return teachers
    };
};