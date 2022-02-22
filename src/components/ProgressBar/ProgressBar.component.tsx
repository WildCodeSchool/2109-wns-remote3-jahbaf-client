import { ProgressBarProps } from './ProgressBar.props';

import './ProgressBar.style.scss';

export const ProgressBar = ({ progression }: ProgressBarProps) => {
    return (
        <div className="progress-bar--wrapper">
            <div className="progress-bar">
                <div className="progression" style={{ width: `${progression}%` }} />
            </div>
        </div>
    );
};
