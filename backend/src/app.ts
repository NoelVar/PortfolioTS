// Seperation of conserns (separate app.ts and db connection server.ts)

// imports
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import createHttpError, { isHttpError } from 'http-errors';
import morgan from 'morgan';
import projectRoutes from './routes/projectsRoutes';
import contactRoutes from './routes/contactRoutes';

// initialising app
const app = express();

const corsOption = {
    origin: ['http://localhost:3000', 'https://noelvarga.netlify.app/']
}

// CORS
app.use(cors(corsOption));

// Using morgan to log accessed endpoint information
app.use(morgan("dev"));

// Set up express to accept JSON
app.use(express.json());

// endpoints
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes)

// handling non-existant endpoints
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

// error handler (have to declare types since anything could be passed TS) has to take these 4 arguments!
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    // fallback value
    let errorMessage = "An unknown message has occured";
    let statusCode = 500;
    // checks if error is an instance of HTTP Error
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;

// End of Document --------------------------------------------------------------------------------