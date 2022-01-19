import { Button, Loader } from 'components';
import { useState } from 'react';
import { ProjectCreationContentProps } from './ProjectCreationContent.props';
import { CreateProjectInfos } from 'models';
import { ProjectInformations, StatusBar } from './subComponents';
import './ProjectCreationContent.style.scss';

const steps = ['Informations', 'Membres', 'Recapitulatif'];

export const ProjectCreationContent = ({ onSubmitAction, isLoading }: ProjectCreationContentProps) => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [projectInfos, setProjectInfos] = useState<CreateProjectInfos>({
        name: '',
        description: ''
    });

    /**
     * On clicking panel button it will increment the current step until the last one, on the last one it will call the graphql createProject mutation
     */
    const onClickButton = () => {
        if (!projectInfos.name.length) {
            // Show error notification
        } else {
            currentStep === steps.length
                ? onSubmitAction({ variables: { projectInput: { name: projectInfos.name, description: projectInfos.description } } })
                : setCurrentStep(currentStep + 1);
        }
    };

    const updateProjectInfos = (value: {[key: string]: string}) => {
        setProjectInfos({
            ...projectInfos,
            ...value
        });
    };

    return (
        <div className="projectCreationContent">
            <StatusBar steps={steps} currentStep={currentStep}/>
            <h2>{ steps[currentStep - 1] }</h2>

            { currentStep === 1 && <ProjectInformations projectInfos={projectInfos} updateProjectInfos={updateProjectInfos}/> }
            {
                currentStep === 2 && (
                    <div className="content">
                    </div>
                )
            }
            {
                currentStep === 3 && (
                    <div className="content">
                    </div>
                )
            }
            <div className="footer">
                { isLoading && <Loader/>}
                <Button isDisabled={isLoading} content={currentStep === steps.length ? 'Envoyer' : 'Suivant'} onClickAction={onClickButton}/>
            </div>
        </div>
    );
};
