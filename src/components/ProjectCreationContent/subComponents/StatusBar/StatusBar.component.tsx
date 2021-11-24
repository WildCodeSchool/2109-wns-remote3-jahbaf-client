import { StatusBarProps } from './StatusBar.props';

import './StatusBar.style.scss';

export const StatusBar = ({ steps, currentStep }: StatusBarProps) => (
    <div className="statusBar">
        {steps.map((val, index) => (
            <span key={index} className={index + 1 === currentStep ? 'current' : (index + 1 < currentStep ? 'done' : '')}>
                <span className="index">{ index + 1 }</span>
                <span className="name">{ val }</span>
            </span>
        ))}
    </div>
);
