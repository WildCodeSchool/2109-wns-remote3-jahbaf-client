import { TaskItem } from 'components/TaskItem';
import { Task } from 'models';
import { TasksProps } from './Tasks.props';

import './Tasks.style.scss';

export const Tasks = ({ tasks }: TasksProps) => {
    return (
        <div className='tasks'>
            { tasks.map((task: Task, index: number) => <TaskItem task={task} key={index}/>) }
        </div>
    );
};
