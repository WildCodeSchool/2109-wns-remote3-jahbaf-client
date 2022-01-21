import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ProjectDetailsProps } from './ProjectDetails.props';
import { UPDATE_PROJECT } from 'services/projects.service';
import './ProjectDetails.style.scss';
import { Card } from 'components';

export const ProjectCard = ({ project }: ProjectDetailsProps) => {
    const createdAt = 'test';
    const createdBy = 'John Doe';
    const team = [
        'John Doe',
        'Jane Doe',
        'Jack Doe',
        'Jill Doe',
        'Jenny Doe',
        'Juan Dos Tres'
    ];
    const [isEditMode, setIsEditMode] = useState(false);
    const toggleEditMode = () => { setIsEditMode(!isEditMode); };
    const [newProjectInfos, setNewProjectInfos] = useState({ name: project.name.toUpperCase(), description: project.description });
    const projectId = window.location.href.substring((window.location.href).indexOf('projet/') + 7);
    const [updateProject] = useMutation(UPDATE_PROJECT);

    const submitUpdatedProjectInfos = (e: any) => {
        e.preventDefault();
        updateProject({
            variables: {
                projectInput: {
                    id: projectId,
                    name: newProjectInfos.name,
                    description: newProjectInfos.description
                }
            }
        });
        setIsEditMode(!isEditMode);
    };

    return (
        <div className="project-details">
            <div className="project-details__header">
                {!isEditMode
                    ? (
                        <div
                            className="project-details__header__name"
                            onClick={toggleEditMode}
                        >
                            {project.name.toUpperCase()}
                        </div>
                    )
                    : (
                        <div className="d-flex" style={{ marginBottom: '1rem' }}>
                            <form
                                onSubmit={submitUpdatedProjectInfos}
                            >
                                <input
                                    type="text"
                                    style={{ fontSize: 'x-large' }}
                                    defaultValue={project.name.toUpperCase()}
                                    onChange={(e) => {
                                        setNewProjectInfos({ name: e.target.value, description: newProjectInfos.description });
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        marginLeft: '10px',
                                        paddingInline: '10px'
                                    }}
                                >
                                Confirmer
                                </button>
                            </form>
                        </div>
                    )}
                <div className="project-details__header__init">
                    {createdAt} by {createdBy}
                </div>
            </div>
            <Card isClosable={false}>
                <div className="project-details__body">
                    <div className="project-details__body__team">
                        <div className="project-details__body__team__title">
                            Team
                        </div>
                        <div className="project-details__body__team__members">
                            {team.map((member: string, index: number) => (
                                <div
                                    className="project-details__body__team__members__member"
                                    key={index}
                                >
                                    {member}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="project-details__body__description">
                        <div className="project-details__body__description__title">
                            Description
                        </div>
                        {!isEditMode
                            ? (
                                <div className="project-details__body__description__value">
                                    {project.description}
                                </div>
                            )
                            : (
                                <input
                                    type="text"
                                    style={{ fontSize: 'x-large' }}
                                    defaultValue={project.description}
                                    onChange={(e) => {
                                        setNewProjectInfos({ name: newProjectInfos.name, description: e.target.value });
                                    }}
                                />
                            )}
                    </div>
                </div>
            </Card>
        </div>
    );
};
