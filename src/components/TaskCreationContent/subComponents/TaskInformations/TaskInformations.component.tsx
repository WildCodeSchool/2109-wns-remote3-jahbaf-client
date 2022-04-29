import { TaskInformationsProps } from './TaskInformations.props';

import './TaskInformations.style.scss';

export const TaskInformations = ({ taskInfos, updateTaskInfos }: TaskInformationsProps) => (
    <div className="task-informations">
        <input
            type="text"
            name="title"
            placeholder="Nom de votre tâche"
            value={taskInfos.title}
            onChange={(e) => updateTaskInfos({ title: e.target.value })} />
    </div>
);
