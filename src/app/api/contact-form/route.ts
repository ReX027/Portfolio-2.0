import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { sendFormCompletionEmail } from "@/helpers/sendEmailToUser";

export async function POST(request: Request){
    await dbConnect()

    try {
        const {name, email, message} = await request.json()
        // console.log(name, request, message)
        const emailResponse = await sendFormCompletionEmail(name,email,message)

        const User = new UserModel({
            name,
            email,
            message
        })
        await User.save();

        if(!emailResponse.success){
            return Response.json(
                {
                    success: false,
                    message: emailResponse.message
                },
                {
                    status:500
                }
            )
        }
        return Response.json(
            {
                success: true,
                message: "Thank You for Contacting Me!"
            },
            {
                status:200
            }
        )
    } catch (error) {
        console.error('Error sending contact form details', error)

        return Response.json(
            {
                success: false,
                message: "Error sending contact form details"
            },
            {
                status:500
            }
        )
    }
}