import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo_jahbaf-small.png';
import LogoFerme from 'assets/images/logo_jahbaf-small-hidden.png';
import './NavigationMobile.style.scss';
import { NavigationMobileProps } from './NavigationMobile.props';
import { Switch } from 'components/Navigation/subComponents/Switch';

export const NavigationMobile = ({ onSwitchTheme, currentTheme }: NavigationMobileProps) => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false);

    const onToggleMenu = () => {
        toggleMenu(!isMenuOpen);
    };

    return (
        <div className="navigation-mobile">
            <h1>JAHBAF</h1>
            <nav className={isMenuOpen ? 'opened' : 'closed'}>
                <Switch onSwitch={onSwitchTheme} currentValue={currentTheme} />
                <div className="navigation-links">
                    <Link onClick={onToggleMenu} to="">Support</Link>
                </div>
            </nav>
            <button className={isMenuOpen ? 'button-opened' : 'button-closed'} onClick={onToggleMenu}>
                <img src={isMenuOpen ? LogoFerme : Logo} />
            </button>
        </div>
    );
};
