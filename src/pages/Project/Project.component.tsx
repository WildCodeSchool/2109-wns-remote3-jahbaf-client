import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { displayNotification } from 'store/notification';
import { FIND_ONE_PROJECT_BY_ID } from 'services/projects.service';
import { ProjectCard } from 'components';
import './Project.style.scss';

export const Project = () => {
    const args = useParams<{[id: string]: string}>();
    const dispatch = useDispatch();
    const { data, loading, error } = useQuery(FIND_ONE_PROJECT_BY_ID, { variables: args });
    useEffect(() => {
        document.title = 'Jahbaf - Projet';
    }, []);
    useEffect(() => {
        if (error) dispatch(displayNotification('error', 'Une erreur interne est survenue, veuillez réessayer.'));
    }, [data, error]);
    return (
        <div className="project-page">
            {loading ? <div>Loading...</div> : <ProjectCard project={data?.findProjectById}/>}
        </div>
    );
};
