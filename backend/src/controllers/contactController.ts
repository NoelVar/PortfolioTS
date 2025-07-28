import { RequestHandler } from "express";
import createHttpError from "http-errors";
import nodemailer from 'nodemailer';
import env from '../util/validateEnv';

export const postContact: RequestHandler = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    try {
        if (!name || !email || !message) {
            throw createHttpError(400, "Missing parameters");
        }

        if (!emailRegex.test(email)) {
            throw createHttpError(400, "Email address format is not valid")
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.SOURCE_EMAIL_ADD,
                pass: env.SOURCE_EMAIL_PASS,
            }
        });

        const mailOptions ={
            from: env.SOURCE_EMAIL_ADD,
            to: "varnoel11@gmail.com",
            subject: `💼BUSINESS💼 from ${name} - ${email}`,
            text: message,
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw createHttpError(500, "Could not send email" + error)
            } else {
                console.log(info)
                res.status(200).json({ message: "Message has been sent" });
            }
        });
        
    } catch (error) {
        next(error);
    }
}

// End of Document --------------------------------------------------------------------------------