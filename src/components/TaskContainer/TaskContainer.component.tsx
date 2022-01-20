import { useMutation, useQuery } from '@apollo/client';
import { Card, Loader, Popup, TaskCreationContent } from 'components';
import { Tasks } from 'components/Tasks';
import { Task } from 'models';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_TASK, GET_TASKS_FROM_PROJECT } from 'services/tasks.service';
import { displayNotification } from 'store/notification';
import { TaskContainerProps } from './TaskContainer.props';
import './TaskContainer.style.scss';

export const TaskContainer = ({ containerName, projectId }: TaskContainerProps) => {
    const [isTaskCreationOpened, toggleTaskCreationPopup] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const getAllTasks = useQuery(GET_TASKS_FROM_PROJECT, { variables: { selectAllTasksFromProjectId: projectId } });
    const dispatch = useDispatch();

    const [addTask, { data, loading, error }] = useMutation(CREATE_TASK);

    useEffect(() => {
        if (data?.createTask) {
            setTasks([...tasks, data.createTask]);
            dispatch(displayNotification('success', 'Votre tâche a été créée avec succés'));
        }
        if (error) { dispatch(displayNotification('error', 'Une erreur est survenue, veuillez réessayer.')); }
    }, [data, error]);

    useEffect(() => {
        if (!getAllTasks.loading && getAllTasks.data.selectAllTasksFromProject) {
            setTasks(getAllTasks.data.selectAllTasksFromProject);
        }
    }, [getAllTasks.loading]);

    const addTaskToProject = (data: any) => {
        addTask(data);
        toggleTaskCreationPopup(false);
    };

    return (
        <div className='task-container'>
            <Card isClosable={false}>
                <>
                    <div className='task-container-header'>
                        <h2>{containerName}</h2>
                        {isTaskCreationOpened &&
                            <Popup motion="enter-left">
                                <Card title="Créez une nouvelle tâche" isClosable={true} onCloseAction={() => toggleTaskCreationPopup(false)}>
                                    <TaskCreationContent onSubmitAction={addTaskToProject} isLoading={loading} projectId={projectId} />
                                </Card>
                            </Popup>}
                        <button onClick={() => toggleTaskCreationPopup(true)}>+</button>
                    </div>
                    {
                        getAllTasks.loading
                            ? <Loader/>
                            : <Tasks tasks={tasks}/>
                    }
                </>
            </Card>
        </div>
    );
};
