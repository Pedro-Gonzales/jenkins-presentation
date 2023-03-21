import { describe, it } from "vitest";
import { app } from '../src/app';
import request from "supertest";

describe('Teachers routes', () =>{
    it('should be able to list all teachers', async () => {
        await request(app).get('/teachers')
        .expect(200)
    });     

    it('should be able to list a expecific teacher', async () =>{
        const getTeachersResponse = await request(app).get('/teachers')
        const randomTeacher = getTeachersResponse.body[Math.floor(Math.random() * getTeachersResponse.body.length)]
       
        await request(app).get(`/teachers/${randomTeacher.id}`)
            .expect(200)
    })
})