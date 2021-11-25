import { useMutation } from '@apollo/client';
import { Card, Popup, ProjectCreationContent } from 'components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CREATE_PROJECT } from 'services/projects.service';
import './Projects.style.scss';

export const Projects = () => {
    const [isProjectCreationOpened, toggleProjectCreationPopup] = useState(false);
    const [addProject, { data, loading }] = useMutation(CREATE_PROJECT);
    const history = useHistory();

    useEffect(() => {
        /** Set the page title on component init */
        document.title = 'Jahbaf - Projets';
    }, []);

    useEffect(() => {
        if (data?.createProject) {
            /** Redirect to the project page if data is available when project is created */
            history.push(`/projet/${data.createProject.id}`);
        }
    }, [data]);

    return (
        <div className="projects-page">
            <h1>Mes projets</h1>
            <button className="add-project" onClick={() => toggleProjectCreationPopup(true)}>+</button>
            {isProjectCreationOpened &&
            <Popup motion="enter-left">
                <Card title="Créez un nouveau projet" isClosable={true} onCloseAction={() => toggleProjectCreationPopup(false)}>
                    <ProjectCreationContent onSubmitAction={addProject} isLoading={loading}/>
                </Card>
            </Popup>}
        </div>
    );
};
