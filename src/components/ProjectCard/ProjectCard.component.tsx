import { Link } from 'react-router-dom';
import { ProjectCardProps } from './ProjectCard.props';

import './ProjectCard.style.scss';

export const ProjectCard = ({ project }: ProjectCardProps) => (
    <Link to={`/projet/${project.id}`}>{project.name}</Link>
);
