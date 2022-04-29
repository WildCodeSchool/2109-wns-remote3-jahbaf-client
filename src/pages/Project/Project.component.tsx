import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { displayNotification } from 'store/notification';
import { FIND_ONE_PROJECT_BY_ID } from 'services/projects.service';
import { Loader, ProjectCard, TaskContainer } from 'components';
import './Project.style.scss';

export const Project = () => {
    const args = useParams<{ [id: string]: string }>();
    const { data, loading, error } = useQuery(FIND_ONE_PROJECT_BY_ID, { variables: args });
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Jahbaf - Projet';
    }, []);

    useEffect(() => {
        if (error) dispatch(displayNotification('error', 'Une erreur interne est survenue, veuillez réessayer.'));
    }, [data, error]);

    return (
        <div className="project-page">
            {
                loading
                    ? <Loader />
                    : <>
                        <ProjectCard project={data?.findProjectById} />
                        <TaskContainer containerName='backlog' projectId={args.id} />
                    </>
            }
        </div>
    );
};
