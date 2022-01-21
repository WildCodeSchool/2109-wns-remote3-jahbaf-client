import { TaskContainerProps } from './TaskContainer.props';
import './TaskContainer.style.scss';

export const TaskContainer = ({ containerName }: TaskContainerProps) => (
    <div>
        <div>
            <h2>{ containerName }</h2>
            <button>+</button>
        </div>
    </div>
);
