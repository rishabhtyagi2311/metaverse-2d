import z from 'zod'


export const signUpSchema = z.object({
    username : z.string(),
    email : z.string().email(),
    password : z.string()

})

export const signinSchema = z.object({

    username : z.string(),
    password: z.string()
})