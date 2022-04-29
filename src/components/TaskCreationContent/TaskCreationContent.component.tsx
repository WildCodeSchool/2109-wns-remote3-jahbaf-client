import { Button, Loader } from 'components';
import { useState } from 'react';
import { TaskCreationContentProps } from './TaskCreationContent.props';
import { CreateTaskInfos } from 'models';
import { TaskInformations } from './subComponents';
import './TaskCreationContent.style.scss';
import { displayNotification } from 'store/notification';
import { useDispatch } from 'react-redux';

export const TaskCreationContent = ({ onSubmitAction, isLoading, projectId }: TaskCreationContentProps) => {
    const dispatch = useDispatch();
    const [taskInfos, setTaskInfos] = useState<Pick<CreateTaskInfos, 'title'>>({
        title: ''
    });

    /**
     * On clicking panel button it will increment the current step until the last one, on the last one it will call the graphql createProject mutation
     */
    const onClickButton = () => {
        if (!taskInfos.title.length) {
            dispatch(displayNotification('error', 'Veuillez renseigner un titre correct pour votre tâche'));
            // Show error notification
        } else {
            onSubmitAction({ variables: { taskInput: { title: taskInfos.title, projectId } } });
        }
    };

    const updateTaskInfos = (value: {[key: string]: string}) => {
        setTaskInfos({
            ...taskInfos,
            ...value
        });
    };

    return (
        <div className="taskCreationContent">
            <TaskInformations taskInfos={taskInfos} updateTaskInfos={updateTaskInfos}/>
            <div className="footer">
                { isLoading && <Loader/>}
                <Button isDisabled={isLoading} content='Envoyer' onClickAction={onClickButton}/>
            </div>
        </div>
    );
};
