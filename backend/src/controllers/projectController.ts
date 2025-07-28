// imports
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import * as mongodb from 'mongodb';
import mongoose from "mongoose";
import projectsModel from "../models/projectsModel";

// Get all function (Needed type RequestHandler for TS) -------------------------------------------
export const getProjects: RequestHandler = async (req, res, next) => {
    try {
        const projects = await projectsModel
            .find()
            .sort({ createdAt: -1 })
            .exec();

        const projectsObj = projects.map(project => ({
            id: project._id,
            title: project.title,
            content: project.content,
            image: project.image ? Buffer.from(project.image).toString('base64') : null,
            date: project.date,
            link: project.link,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
        }));

        res.status(200).json(projectsObj);
    } catch (error) {
        next(error);
    }
}

// Get single project -----------------------------------------------------------------------------
// Get single project interface
interface GetSingleProjectParams {
    projectId?: string,
}

// Get single project function (unknown is restrictive, unlike any)
export const getSingleProject: RequestHandler<GetSingleProjectParams, unknown, unknown, unknown> = async (req, res, next) => {
    const projectId = req.params.projectId;

    try {
        if (!mongoose.isValidObjectId(projectId)) {
            throw createHttpError(400, "Invalid project Id");
        }

        const project = await projectsModel.findById(projectId).exec();

        if (!project) {
            throw createHttpError(404, "Could not find project in database");
        }

        let projectObj = {
            id: project._id,
            title: project.title,
            content: project.content,
            image: project.image ? Buffer.from(project.image).toString('base64') : null,
            date: project.date,
            link: project.link,
            createdAt: project.createdAt,
            updatedAt: project.updatedAt,
        }
            
        
        res.status(200).json(projectObj);
    } catch (error) {
        next(error);
    }
}

// Create project ---------------------------------------------------------------------------------
// Create project interface 
interface CreateProjectBody {
    title?: string,
    content?: string,
    image?: Buffer,
    date?: Object,
    link?: string,
}

// Create project function
export const createProject: RequestHandler<unknown, unknown, CreateProjectBody, unknown> = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const image = req.file;
    const date = req.body.date;
    const link = req.body.link;

    try {
        // First line of defence before Mongoose 'require'
        if (!title || !content || !date) {
            throw createHttpError(400, "Parameters cannot be empty");
        }

        /**
         * Turn file into Binary 
         * https://www.youtube.com/watch?v=vb_EQcWinao
         * https://www.mongodb.com/resources/products/compatibilities/using-typescript-with-mongodb-tutorial)
         */
        const imageBinary = new mongodb.Binary(image?.buffer);

        // Create new instance of project
        const newProject = await projectsModel.create({
            title: title,
            content: content,
            image: imageBinary,
            date: date,
            link: link,
        });

        if (!newProject) {
            throw createHttpError(409, "A conflict has occurred and could not create new project");
        }

        res.status(201).json(newProject);
    } catch (error) {
        next(error);
    }
}

// Update project ---------------------------------------------------------------------------------
// Update project interfaces
interface UpdateProjectParams {
    projectId: string,
}

interface UpdateProjectDate {
    start: Date,
    end: Date,
}

interface UpdateProjectBody {
    title?: string,
    content?: string,
    image?: Buffer,
    date?: UpdateProjectDate,
    link?: string,
}

// Update project function
export const updateProject: RequestHandler<UpdateProjectParams, unknown, UpdateProjectBody, unknown> = async (req, res, next) => {
    const projectId = req.params.projectId;
    const newTitle = req.body.title;
    const newContent = req.body.content;
    const newImage = req.file;
    const newDate = req.body.date;
    const newLink = req.body.link;

    try {
        if (!mongoose.isValidObjectId(projectId)) {
            throw createHttpError(400, "Invalid project Id");
        }

        const project = await projectsModel.findById(projectId).exec();

        if (!project) {
            throw createHttpError(404, "Could not find project in database");
        }

        // Updating with new value OR keeping old one
        project.title = newTitle || project.title;
        project.content = newContent || project.content;
        project.image = newImage?.buffer || project.image;
        project.date = newDate || project.date;
        project.link = newLink || project.link;

        const updatedProject = await project.save();

        res.status(200).json(updatedProject);
    } catch (error) {
        next(error);
    }
}
// Delete project ---------------------------------------------------------------------------------
// Delete project interface
interface DeleteProjectParams {
    projectId: string,
}

// Delete project function
export const deletePropject: RequestHandler<DeleteProjectParams, unknown, unknown, unknown> = async (req, res, next) => {
    const projectId = req.params.projectId;

    try {
        if (!mongoose.isValidObjectId) {
            throw createHttpError(400, "Invalid project Id");
        }

        const deletedProject = await projectsModel.findByIdAndDelete(projectId).exec();

        if (!deletedProject) {
            throw createHttpError(404, "Could not delete project from database");
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        next(error);
    }
}

// End of Document --------------------------------------------------------------------------------