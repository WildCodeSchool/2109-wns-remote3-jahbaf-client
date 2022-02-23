import { Button } from 'components';
import { onLogout } from 'helpers/auth.helpers';
import { HiLogout } from 'react-icons/hi';
import './Logout.style.scss';

const Logout = () => (
    <div className='logout-wrapper'>
        <Button onClickAction={onLogout} content={<HiLogout />} />
    </div>
);

export default Logout;
