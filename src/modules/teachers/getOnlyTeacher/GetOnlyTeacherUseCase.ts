import *  as fs from 'fs'

export interface IGetOnlyTeachers{
    success: boolean,
    message?: string,
    teacher?: {
        id: string,
        teacherName: string,
        isDepartamentChief: boolean
    }
};

export class GetOnlyTeachersUseCase {
    async execute(teacherId: number) : Promise<IGetOnlyTeachers>{
      const { teachers } =  JSON.parse(fs.readFileSync('./src/database/teachers.json', 'utf-8'))
       const index =  teachers.findIndex((teacher : any) => teacher.id === teacherId)
       if(index !== -1){
        return {
            success: true,
            teacher : teachers[index]
        }
       }else{
        return {
            success: false,
            message: 'Teacher not found'
        }
       }
    };
};