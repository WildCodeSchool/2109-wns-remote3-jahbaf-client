import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ProjectDetailsProps } from './ProjectDetails.props';
import { UPDATE_PROJECT } from 'services/projects.service';
import { Card } from 'components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import './ProjectDetails.style.scss';

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
    const [isEditModeName, setIsEditModeName] = useState(false);
    const [isEditModeDescription, setIsEditModeDescription] = useState(false);
    const toggleEditModeName = () => { setIsEditModeName(!isEditModeName); };
    const toggleEditModeDescription = () => { setIsEditModeDescription(!isEditModeDescription); };
    const [newProjectInfos, setNewProjectInfos] = useState({ name: project.name, description: project.description });
    const { id: projectId } = useParams < { id: string }>();
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
        setIsEditModeName(false);
        setIsEditModeDescription(false);
    };

    return (
        <div className="project-details">
            <div className="project-details__header">
                {!isEditModeName
                    ? (
                        <div
                            className="project-details__header__name hoverEdit"
                            onClick={toggleEditModeName}
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
                                { isEditModeName &&
                                     (
                                         <button
                                             type="submit"
                                             className="name__icon"
                                         >
                                             <BsFillCheckCircleFill size={20} color='green' />
                                         </button>)

                                }
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
                        {!isEditModeDescription
                            ? (
                                <div className="project-details__body__description__value hoverEdit" onClick={toggleEditModeDescription}>
                                    {project.description}
                                </div>
                            )
                            : (
                                <form
                                    onSubmit={submitUpdatedProjectInfos}
                                >
                                    <input
                                        type="text"
                                        style={{ fontSize: 'x-large' }}
                                        defaultValue={project.description}
                                        onChange={(e) => {
                                            setNewProjectInfos({ name: newProjectInfos.name, description: e.target.value });
                                        }}
                                    />
                                    { isEditModeDescription &&
                                     (
                                         <button
                                             type="submit"
                                             className="description__icon"
                                         >
                                             <BsFillCheckCircleFill size={20} color='green' />
                                         </button>)

                                    }
                                </form>
                            )}
                    </div>
                </div>
            </Card>
        </div>
    );
};
