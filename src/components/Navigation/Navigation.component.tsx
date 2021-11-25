import './Navigation.style.scss';
import { NavigationDesktop } from './subComponents/NavigationDesktop';
import { NavigationMobile } from './subComponents/NavigationMobile';

export const Navigation = () => (
    <div>
        <NavigationDesktop/>
        <NavigationMobile/>
    </div>
);
