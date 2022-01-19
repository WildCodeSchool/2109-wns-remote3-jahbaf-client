import { useLazyQuery, useMutation } from '@apollo/client';
import { Card, Popup, ProjectCreationContent } from 'components';
import { Project } from 'components/Project';
import { IProject } from 'models';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { CREATE_PROJECT_MUTATION, GET_PROJECTS_QUERY } from 'services/projects.service';
import { displayNotification } from 'store/notification';
import './Projects.style.scss';

export const Projects = () => {
    const [isProjectCreationOpened, toggleProjectCreationPopup] = useState(false);
    const [fetchedProjects, setFetchedProjects] = useState<IProject[]>([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const [fetchProjects, { data: projectsData }] = useLazyQuery(GET_PROJECTS_QUERY);
    const [addProject, { loading }] = useMutation(CREATE_PROJECT_MUTATION, {
        onCompleted: (data) => {
            /** Redirect to the project page if data is available when project is created */
            history.push(`/projet/${data?.createProject.id}`);
            /** Trigger success notification */
            dispatch(displayNotification('success', 'Votre projet a été créé avec succés'));
        },
        onError: (e) => {
            /** Trigger error notification */
            dispatch(displayNotification('error', 'Une erreur interne est survenue, veuillez réessayer.'));
        }
    });

    useEffect(() => {
        /**  Fetch all projects */
        fetchProjects();

        /** Cannot be put in apollo onCompleted callback because it doesn't rerender on route change */
        setFetchedProjects(projectsData?.findManyProjects);
    }, [projectsData]);

    useEffect(() => {
        /** Set the page title on component init */
        document.title = 'Jahbaf - Projets';
    }, []);

    return (
        <div className="projects-page">
            <h1>Mes projets</h1>
            <div className="projects projects--wrapper">
                <button className="add-project" onClick={() => toggleProjectCreationPopup(true)}>+</button>
                {fetchedProjects?.map((project) => {
                    const { name, description, id } = project;
                    console.log(name);
                    return (
                        <div key={id} onClick={() => history.push(`projet/${id}`)}>
                            <Project id={id} name={name} description={description} />
                        </div>
                    );
                })}
            </div>
            {isProjectCreationOpened &&
                <Popup motion="enter-left">
                    <Card title="Créez un nouveau projet" isClosable={true} onCloseAction={() => toggleProjectCreationPopup(false)}>
                        <ProjectCreationContent onSubmitAction={addProject} isLoading={loading} />
                    </Card>
                </Popup>}
        </div>
    );
};
