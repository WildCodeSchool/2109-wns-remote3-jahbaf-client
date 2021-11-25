import { useQuery } from '@apollo/client';
import { Project } from 'models';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GET_PROJECT_BY_ID } from 'services/projects.service';
import './Projet.style.scss';

export const Projet = () => {
    const { id } = useParams<{id: string}>();
    const project = useQuery<Project | null>(GET_PROJECT_BY_ID, { variables: { id } });

    useEffect(() => {
        document.title = `Jahbaf - ${project.data ? project.data.name : 'Projet'}`;
    }, []);

    return (
        <div>
            { project.data?.name && <h1>{ project.data.name }</h1> }
        </div>
    );
};
