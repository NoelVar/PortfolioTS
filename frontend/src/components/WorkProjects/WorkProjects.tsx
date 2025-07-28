import './WorkProjects.css';
import '../../css/util.css';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCards/ProjectCard';
import { Project } from '../../models/project';
import { Bounce, toast } from 'react-toastify';

const WorkProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function loadProjects() {
            const id = toast.loading("Loading projects...", 
            {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            try {
                const response = await fetch('https://portfolio-typescript.up.railway.app/api/projects/', 
                    {
                        method: "GET"
                    }
                );

                if (!response.ok) {
                    toast.update(id, 
                    {   
                        render: "Couldn't load projects", 
                        type: "error", 
                        isLoading: false, 
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                }

                const projects = await response.json();
                setProjects(projects);
                toast.update(id, 
                {   
                    render: "Projects loaded successfully!", 
                    type: "success", 
                    isLoading: false, 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
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