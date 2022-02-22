import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo_jahbaf-small.png';
import LogoFerme from 'assets/images/logo_jahbaf-small-hidden.png';
import './NavigationMobile.style.scss';
import { NavigationMobileProps } from './NavigationMobile.props';
import { Switch } from 'components/Navigation/subComponents/Switch';
import { Routes } from 'routes/Routes.enum';
import { useGetSelf } from 'hooks/useGetSelf.hook';

export const NavigationMobile = ({ onSwitchTheme, currentTheme }: NavigationMobileProps) => {
    const { isLoggedIn } = useGetSelf();
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
                    {isLoggedIn
                        ? <Link onClick={onToggleMenu} to={Routes.PROJECTS}>Projets</Link>
                        : <div>
                            <Link onClick={onToggleMenu} to={Routes.LOGIN}>Se connecter</Link>
                            <Link onClick={onToggleMenu} to={Routes.SIGNUP}>S&apos;inscrire</Link>
                        </div>
                    }
                </div>
            </nav>
            <button className={isMenuOpen ? 'button-opened' : 'button-closed'} onClick={onToggleMenu}>
                <img src={isMenuOpen ? LogoFerme : Logo} />
            </button>
        </div>
    );
};
