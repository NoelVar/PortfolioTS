import './ProjectCard.css';
import '../../../css/util.css';
import { Card, Button, Collapse, CloseButton } from "react-bootstrap";
import { Project as ProjectModel} from "../../../models/project";
import { formatDate } from '../../../utils/formatDate';
import { useState } from 'react';

interface ProjectCardProps {
    project: ProjectModel,
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Card onClick={() => setIsOpen(true)}>
            {project.image
                ? <Card.Img variant="top" src={`data:image/png;base64,${project.image}`} />
                : <Card.Img variant="top" src='not-found.jpg' />
            }
            <Card.Body className='card-body-closed'>
                <Card.Title className='card-title'>
                    {project.title}
                </Card.Title>

                <Card.Subtitle className="mb-2 card-subtitle">
                    {project.date
                        ?  project.date.start
                            ? formatDate(project.date.start) + " - " + (project.date.end ? formatDate(project.date.end) : "present day")
                            : "No date provided"
                        : "No date provided"
                    }
                </Card.Subtitle>

                <Button
                className='button'
                onClick={() => setIsOpen(true)}
                >More</Button>
            </Card.Body>
        </Card>

        {isOpen &&
        <Card className={isOpen ? 'open' : 'closed'}>
            <Card.Header className='card-header'>
                <CloseButton 
                    className='close-button'
                    onClick={() => setIsOpen(false)}
                />
            </Card.Header>
                
           <Card.Body className='card-body'>
                <Card.Title className='card-title'>
                    {project.title}
                </Card.Title>

                <Card.Subtitle className="mb-2 card-subtitle">
                    {project.date
                        ?  project.date.start
                            ? formatDate(project.date.start) + " - " + (project.date.end ? formatDate(project.date.end) : "present day")
                            : "No date provided"
                        : "No date provided"
                    }
                </Card.Subtitle>

                <Collapse in={isOpen}>
                    <>
                        <Card.Text>{project.content}</Card.Text> 
                        {project.link &&
                            <Card.Link href={project.link} target="_blank" rel="noreferrer">See project here</Card.Link>
                        }
                    </>
                </Collapse>
                
                <br />

                <Button
                className='button'
                onClick={() => setIsOpen(false)}
                >Close</Button>
            </Card.Body>
        </Card>
        }
        {isOpen && <div className='card-backdrop' onClick={() => setIsOpen(false)}></div>}
        </>
    );
}
 
export default ProjectCard;