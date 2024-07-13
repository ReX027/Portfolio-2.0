import {z} from "zod"

export const nameValidation = z
    .string()
    .min(2, "Name must be atleast 2 characters")
    .max(20, "Name must not be more than 20 characters")
    .regex(/^[a-zA-Z]+$/,"Name must not contain special character")

export const sendMessageSchema = z.object({
    name: nameValidation,
    email: z.string().email({message:"Invalid email address"}),
    message:z.string()
})