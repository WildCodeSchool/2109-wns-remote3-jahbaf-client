import { ProjectProps } from './Project.props';

import './Project.style.scss';
import { ProgressBar } from 'components/ProgressBar';
import { BsFillImageFill } from 'react-icons/bs';

export const Project = ({ name, description }: ProjectProps) => {
    return (
        <div className="project">
            <div className="project__image">
                <BsFillImageFill size='100%' />
            </div>
            <div className="project__content">
                <h3>{name}</h3>
                <p className='start-end-time'>Start date - end Date</p>
                <p>
                    <ProgressBar progression={50} />
                </p>
            </div>
        </div>
    );
};
