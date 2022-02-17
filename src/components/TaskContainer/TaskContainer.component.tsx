import { useMutation } from '@apollo/client';
import { Card, Popup, TaskCreationContent } from 'components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_TASK } from 'services/tasks.service';
import { displayNotification } from 'store/notification';
import { TaskContainerProps } from './TaskContainer.props';
import './TaskContainer.style.scss';

export const TaskContainer = ({ containerName, projectId }: TaskContainerProps) => {
    const [isTaskCreationOpened, toggleTaskCreationPopup] = useState(false);
    const dispatch = useDispatch();

    const [addTask, { data, loading, error }] = useMutation(CREATE_TASK);

    useEffect(() => {
        if (data?.createTask) {
            dispatch(displayNotification('success', 'Votre tâche a été créée avec succés'));
        }
        if (error) { dispatch(displayNotification('error', 'Une erreur est survenue, veuillez réessayer.')); }
    }, [data, error]);

    const addTaskToProject = (data: any) => {
        addTask(data);
        toggleTaskCreationPopup(false);
    };

    return (
        <div className='task-container'>
            <Card isClosable={false}>
                <div className='task-container-header'>
                    <h2>{containerName}</h2>
                    {isTaskCreationOpened &&
                        <Popup motion="enter-left">
                            <Card title="Créez une nouvelle tâche" isClosable={true} onCloseAction={() => toggleTaskCreationPopup(false)}>
                                <TaskCreationContent onSubmitAction={addTaskToProject} isLoading={loading} projectId={projectId}/>
                            </Card>
                        </Popup>}
                    <button onClick={() => toggleTaskCreationPopup(true)}>+</button>
                </div>
            </Card>
        </div>
    );
};
