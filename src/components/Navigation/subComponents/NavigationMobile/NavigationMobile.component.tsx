import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/logo_jahbaf-small.png';
import LogoFerme from 'assets/images/logo_jahbaf-small-hidden.png';
import './NavigationMobile.style.scss';

export const NavigationMobile = () => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false);

    const onToggleMenu = () => {
        toggleMenu(!isMenuOpen);
    };

    return (
        <div className="navigation-mobile">
            <h1>JAHBAF</h1>
            <nav className={isMenuOpen ? 'opened' : 'closed'}>
                <Link onClick={onToggleMenu} to="">Support</Link>
            </nav>
            <button className={isMenuOpen ? 'button-opened' : 'button-closed'} onClick={onToggleMenu}>
                <img src={isMenuOpen ? LogoFerme : Logo}/>
            </button>
        </div>
    );
};
