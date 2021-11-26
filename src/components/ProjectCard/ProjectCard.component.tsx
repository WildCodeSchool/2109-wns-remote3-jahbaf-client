// import { ProjectCardProps } from './ProjectCard.props';

import './ProjectCard.style.scss';

export const ProjectCard = ({ project }: any) => {
    console.log(project);
    return (
        <div className="project-card">
            <div className="project-card__header">
                <div className="project-card__header__name">{project.name}</div>
                <div className="project-card__header__init">DUMMY-DATE by DUMMY-CREATOR</div>
            </div>
            <div className="project-card__body">
                <div className="project-card__body__item__left">
                    <div className="project-card__body__team__title">PROJECT TEAM</div>
                    <div className="project-card__body__team__value">DUMMY-TEAM</div>
                </div>
                <div className="project-card__body__item__right">
                    <div className="project-card__body_description_title">DESCRIPTION</div>
                    <div className="project-card__body_description_value">{project.description}</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
