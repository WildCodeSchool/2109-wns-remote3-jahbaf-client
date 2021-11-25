import { Switch } from 'components/Navigation/subComponents/Switch';
import { Link } from 'react-router-dom';
import { NavigationDesktopProps } from './NavigationDesktop.props';

import './NavigationDesktop.style.scss';

export const NavigationDesktop = ({ onSwitchTheme, currentTheme }: NavigationDesktopProps) => (
    <div className="navigation-desktop">
        <h1>JAHBAF</h1>
        <nav>
            <Link to="/projets">Projets</Link>
        </nav>
        <Switch onSwitch={onSwitchTheme} currentValue={currentTheme} />
    </div>
);
