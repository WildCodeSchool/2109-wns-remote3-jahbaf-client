import { Task } from 'models';
import { TasksProps } from './Tasks.props';

import './Tasks.style.scss';

export const Tasks = ({ tasks }: TasksProps) => (
    <div className='tasks'>
        {
            tasks.map((task: Task, index: number) => {
                return <p className='task' key={index}>{task.title}</p>;
            })
        }
    </div>
);
