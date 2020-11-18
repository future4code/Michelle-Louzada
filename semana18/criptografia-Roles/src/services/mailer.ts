import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const config: SMTPTransport.Options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "388c6fda0372e9",
    pass: "a33e975139cf89"
    }
}

const transporter = nodemailer.createTransport(config);

export async function writeEmail(
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string) {

    const mailContent: Mail.Options = {
        from,
        to,
        subject,
        text,
        html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any)=>{
        if(error){
            throw new Error(error.message);
        }else{
            console.log("E-mail enviado");
        }
    });

}