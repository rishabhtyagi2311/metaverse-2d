
import { axiosModel } from "./axiosModel"
const BACKEND_URL = "http://localhost:3000"

describe("Authentication"  , () => {

    test("User is able to signup Only once" , async () => {

        const username = `rishabh-${Math.random()}`
  
        const password = '123456'
        const email = 'rishabh@email.com'
        const response = await axiosModel.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,
            email
          
        })
  
        
        expect(response.status).toBe(200)
        const updatedResponse = await axiosModel.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,
            email
        })

        expect(updatedResponse.status).toBe(400);


    })
    test('Signup request fails if the username is empty', async () => {
        const username = `kirat-${Math.random()}` // kirat-0.12312313
        const password = "123456"

        const response = await axiosModel.post(`${BACKEND_URL}/api/v1/signup`, {
            password
        })

        expect(response.status).toBe(400)
    })

    test('Signin succeeds if the username and password are correct', async() => {
        const username = `kirat-${Math.random()}`
        const password = "123456"
        const email = `rishabh@${Math.random()}.com`
        const signResponse = await axiosModel.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,
            email
           
        });


        
        const response = await axiosModel.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        });

        
        expect(response.status).toBe(200)
        expect(response.data.accessToken).toBeDefined()
        expect(response.data.refreshToken).toBeDefined()
        
    })

    test('Signin fails if the username and password are incorrect', async() => {
        const username = `kirat-${Math.random()}`
        const password = "123456"
         const email = `rishabh@${Math.random()}.com`

        await axiosModel.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,
            email
         
        });

        const response = await axiosModel.post(`${BACKEND_URL}/api/v1/signin`, {
            username: "WrongUsername",
            password
        })

        expect(response.status).toBe(403)
    })

}) 
