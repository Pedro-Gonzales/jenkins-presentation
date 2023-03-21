import { describe, it } from "vitest";
import { app } from '../src/app';
import request from "supertest";

describe('Subjects routes', () =>{
    it('should be able to list all subjects', async () => {
        await request(app).get('/subjects')
        .expect(200)
    });     

    it('should be able to list a expecific subject', async () =>{
        const getSubjectsResponse = await request(app).get('/subjects')
        const randomSubject = getSubjectsResponse.body[Math.floor(Math.random() * getSubjectsResponse.body.length)]
       
        await request(app).get(`/subjects/${randomSubject.id}`)
            .expect(200)
    })
})