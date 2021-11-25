import { useMutation } from '@apollo/client';
import { Card, Popup, ProjectCreationContent } from 'components';
import { Project } from 'components/Project';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CREATE_PROJECT_MUTATION } from 'services/projects.service';
import './Projects.style.scss';

export const Projects = () => {
    const [isProjectCreationOpened, toggleProjectCreationPopup] = useState(false);
    const [addProject, { data, loading }] = useMutation(CREATE_PROJECT_MUTATION);
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
    const mamadatata = Array.from({ length: 10 }).map((_, i) => {
        return { name: `Projet ${i}`, description: 'loremdsfdsjfdslmkfj' };
    });
    return (
        <div className="projects-page">
            <h1>Mes projets</h1>
            <div className="projects projects--wrapper">
                <button className="add-project" onClick={() => toggleProjectCreationPopup(true)}>+</button>
                {mamadatata.map((project, i) => {
                    const { name, description } = project;
                    console.log(name);
                    return (
                        <div key={i}>
                            <Project name={name} description={description} />
                        </div>);
                })}
            </div>
            {isProjectCreationOpened &&
            <Popup motion="enter-left">
                <Card title="Créez un nouveau projet" isClosable={true} onCloseAction={() => toggleProjectCreationPopup(false)}>
                    <ProjectCreationContent onSubmitAction={addProject} isLoading={loading}/>
                </Card>
            </Popup>}
        </div>
    );
};
