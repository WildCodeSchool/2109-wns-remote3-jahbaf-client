import { ProjectDetailsProps } from './ProjectDetails.props';
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
    return (
        <div className="project-details">
            <div className="project-details__header">
                <div className="project-details__header__name">{project.name.toUpperCase()}</div>
                <div className="project-details__header__init">{createdAt} by {createdBy}</div>
            </div>
            <Card isClosable={false}>
                <div className="project-details__body">
                    <div className="project-details__body__team">
                        <div className="project-details__body__team__title">Team</div>
                        <div className="project-details__body__team__members">
                            {team.map((member: string, index: number) => (
                                <div className="project-details__body__team__members__member" key={index}>
                                    {member}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="project-details__body__description">
                        <div className="project-details__body__description__title">Description</div>
                        <div className="project-details__body__description__value">{project.description}</div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
