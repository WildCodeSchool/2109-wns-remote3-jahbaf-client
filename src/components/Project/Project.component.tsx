import { ProjectProps } from './Project.props';

import './Project.style.scss';
import { ProgressBar } from 'components/ProgressBar';
import { BsFillImageFill } from 'react-icons/bs';

export const Project = ({ name }: ProjectProps) => {
    /** Here to fake project progression. To be deleted once we have real data */
    function randomNumberBetweenZeroAndHundred () {
        return Math.floor(Math.random() * 100);
    }
    return (
        <div className="project">
            <div className="project__image">
                <BsFillImageFill size='100%' />
            </div>
            <div className="project__content">
                <h3>{name}</h3>
                <p className='start-end-time'>Start date - end Date</p>
                <p>
                    <ProgressBar
                        progression={randomNumberBetweenZeroAndHundred()}
                    />
                </p>
            </div>
        </div>
    );
};
