import { Card, Popup } from 'components';
import { useState } from 'react';
import { TaskItemProps } from './TaskItem.props';

import './TaskItem.style.scss';

export const TaskItem = ({ task }: TaskItemProps) => {
    const [isTaskOpened, toggleTaskDisplay] = useState(false);

    return (
        <>
            {
                isTaskOpened &&
                <Popup motion="enter-left">
                    <Card isClosable={true} onCloseAction={() => toggleTaskDisplay(false)}>
                        <>
                            <h2>{task.title}</h2>
                            <p>{ task.createdAt }</p>
                        </>
                    </Card>
                </Popup>
            }
            <p onClick={() => toggleTaskDisplay(true)} className='task'>{task.title}</p>
        </>
    );
};
