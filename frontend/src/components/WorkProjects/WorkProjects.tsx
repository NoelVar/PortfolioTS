import './WorkProjects.css';
import '../../css/util.css';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCards/ProjectCard';
import { Project } from '../../models/project';

const WorkProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function loadProjects() {
            try {
                const response = await fetch('https://portfolio-typescript.up.railway.app/api/projects/', 
                    {
                        method: "GET"
                    }
                );

                const projects = await response.json();
                setProjects(projects);
            } catch (error) {
                console.error(error);
            }
            
        }
        loadProjects();
    }, []);

    return (
        <div className="section" id='work'>
            <h1 className='title'>Work & Projects</h1>
            <div className='project-container'>
                {projects.map((project) => (
                    <div className='single-card-container'>
                        <ProjectCard project={ project }/>
                    </div>
                ))}
                {projects.length === 0 &&
                    <p className='error-msg'>No projects are available to view</p>
                }
            </div>
        </div>
    );
}
 
export default WorkProjects;