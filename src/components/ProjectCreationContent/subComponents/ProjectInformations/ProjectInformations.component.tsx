import { ProjectInformationsProps } from './ProjectInformations.props';

import './ProjectInformations.style.scss';

export const ProjectInformations = ({ projectInfos, updateProjectInfos }: ProjectInformationsProps) => (
    <div className="project-informations">
        <input
            type="text"
            name="name"
            placeholder="Nom de votre projet"
            value={projectInfos.name}
            onChange={(e) => updateProjectInfos({ name: e.target.value })} />
        <input
            type="text"
            name="role"
            placeholder="Votre role sur le projet"
            value={projectInfos.role}
            onChange={(e) => updateProjectInfos({ role: e.target.value })} />
        <label>
            Description du projet
            <textarea
                rows={5}
                name="description"
                value={projectInfos.description}
                onChange={(e) => updateProjectInfos({ description: e.target.value })} />
        </label>
    </div>
);
