import {resend} from "@/lib/resend"
import FormCompletionEmail from "@/emails/FormCompletionEmail"
import { ApiResponse } from "@/types/ApiResponse"

export async function sendFormCompletionEmail(
    name: string,
    email: string,
    message: string
): Promise<ApiResponse> {
    try {
        console.log()
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Received Your Message: Thank You!',
            react: FormCompletionEmail({name, message}),
          });
        return {success: true, message: 'Email send successfully'}
    } catch (error) {
        console.error("Error sending verification email", error)
        return {success: false, message: 'Failed to send email'}
    }
}